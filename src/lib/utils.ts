
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility for formatting currency
export const formatNaira = (value: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  }).format(value);
};

// Format large numbers without currency
export const formatNumber = (value: number) => {
  return new Intl.NumberFormat('en-NG').format(value);
};

// Format percentages
export const formatPercent = (value: number) => {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
};

// Format date to display as DD MMM YY
export const formatShortDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: '2-digit'
  }).format(date);
};
