"use client";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Setup listeners for the API slices
setupListeners(store.dispatch);

// calls to be ran on every page load
const initializeApp = async () => {};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
initializeApp();
