import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

countries.registerLocale(enLocale);

export function formatDate(isoString: string): string {
  const date = new Date(isoString);

  // Define the options for formatting the date without the time zone
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  return date.toLocaleDateString("en-US", options);
}

export function getCountryName(code: string) {
  if (!code) return "";

  try {
    const countryName = countries.getName(code.toUpperCase(), "en");
    return countryName || "Unknown Country";
  } catch (error: unknown) {
    console.error(error);
    return "Unknown Country";
  }
}
