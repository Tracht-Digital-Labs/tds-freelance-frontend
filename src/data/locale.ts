import { z } from 'zod';

export type Locale = 'de' | 'en';
export const localized = z.object({
  de: z.string().min(1),
  en: z.string().min(1),
});
export const l = (de: string, en: string) => ({ de, en });
