import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

/**
 * Combines classnames with Tailwind's merge strategy
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return format(date, "MMMM dd, yyyy");
  } catch (error) {
    return dateString;
  }
}
