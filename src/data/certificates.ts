import { z } from 'zod';
import { l } from './locale';
import certificateData from './certificates.json' with { type: 'json' };

const certificateSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  issuer: z.string().min(1),
  date: z.iso.date(),
  category: z.enum([
    'management',
    'development',
    'data',
    'ai',
    'security',
    'marketing',
  ]),
  skills: z.array(z.string()).min(1),
  image: z.string().regex(/^\/images\/certificates\/[a-z0-9-]+\.webp$/),
});
export const certificates = z
  .array(certificateSchema)
  .length(13)
  .parse(certificateData);
export const certCategories = {
  management: l('Management', 'Management'),
  development: l('Entwicklung & Cloud', 'Development & cloud'),
  data: l('Daten', 'Data'),
  ai: l('KI', 'AI'),
  security: l('Sicherheit', 'Security'),
  marketing: l('SEO', 'SEO'),
};
