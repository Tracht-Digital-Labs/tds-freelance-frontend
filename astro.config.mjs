import { defineConfig } from 'astro/config';
import { tdsViteBuild } from '@tracht-digital-labs/tds-shared/astro';
export default defineConfig({
  site: 'https://freelance.tracht-digital.de',
  output: 'static',
  trailingSlash: 'always',
  vite: { build: { ...tdsViteBuild } },
});
