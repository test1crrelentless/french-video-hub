import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Use proxy for external image URLs so they load despite CORS/referrer blocking (e.g. CDN hotlink protection). */
export function proxyImageUrl(url: string | undefined | null): string | undefined {
  if (!url || typeof url !== 'string' || url.startsWith('data:') || url.startsWith('/')) return url || undefined;
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return `/api/proxy?url=${encodeURIComponent(url)}`;
  }
  return url || undefined;
}
