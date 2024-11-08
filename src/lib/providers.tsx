"use client";

import ReduxProvider from "@/providers/ReduxProvider";
import { FC, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default Providers;
