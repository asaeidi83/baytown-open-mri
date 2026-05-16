import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string) {
  return phone.replace(/[^0-9]/g, '');
}

export function telHref(phone: string) {
  return `tel:+1${formatPhone(phone)}`;
}
