import { z } from 'zod';
import { l, localized } from './locale';
import { skillTree } from './skillTree';

/*
 * Skills are grouped in two levels: a top-level area (`categories`) and a
 * sub-group (`skillSubgroups`). Order of the areas and sub-groups is the
 * display order; skills inside a sub-group are sorted alphabetically at
 * render time. `keywords` feed the search only (never shown): they hold
 * German/English synonyms and umbrella terms, so a search for
 * "JS-Framework" finds Vue, React, Angular, Astro and Preact.
 */
export const categories = {
  frontend: l('Frontend & Web', 'Frontend & web'),
  backend: l('Backend & Schnittstellen', 'Backend & APIs'),
  systems: l('Desktop, Mobile & Systeme', 'Desktop, mobile & systems'),
  data: l('Datenbanken & Datenformate', 'Databases & data formats'),
  commerce: l('E-Commerce & CMS', 'E-commerce & CMS'),
  automation: l('Automatisierung & KI', 'Automation & AI'),
  quality: l('DevOps & Qualität', 'DevOps & quality'),
  process: l('Prozesse & Zusammenarbeit', 'Processes & collaboration'),
};
export type SkillCategory = keyof typeof categories;
export const skillSubgroups = {
  'web-languages': l('Sprachen & Grundlagen', 'Languages & foundations'),
  'web-frameworks': l('JavaScript-Frameworks', 'JavaScript frameworks'),
  'web-design': l('Gestaltung & UI', 'Design & UI'),
  'backend-languages': l('Sprachen', 'Languages'),
  'backend-frameworks': l('Frameworks & Laufzeiten', 'Frameworks & runtimes'),
  'backend-interfaces': l(
    'Schnittstellen & Prozess-Engines',
    'Interfaces & process engines',
  ),
  desktop: l('Windows-Desktop', 'Windows desktop'),
  mobile: l('Android & Wear OS', 'Android & Wear OS'),
  embedded: l('Systemnah & Embedded', 'Low-level & embedded'),
  databases: l('Datenbanken', 'Databases'),
  formats: l('Datenformate', 'Data formats'),
  shops: l('Shopsysteme', 'Shop systems'),
  cms: l('Content-Management', 'Content management'),
  'product-data': l(
    'Produktdaten & Vertriebskanäle',
    'Product data & channels',
  ),
  workflows: l(
    'Daten- & Workflow-Automatisierung',
    'Data & workflow automation',
  ),
  ai: l('KI & Sprachmodelle', 'AI & language models'),
  'ci-cd': l('Versionierung & CI/CD', 'Version control & CI/CD'),
  infrastructure: l('Infrastruktur & Betrieb', 'Infrastructure & operations'),
  testing: l('Tests & Monitoring', 'Testing & monitoring'),
  methods: l('Methoden', 'Methods'),
  'team-tools': l('Team-Werkzeuge', 'Team tools'),
  consulting: l('Konzeption & Beratung', 'Concepts & consulting'),
};
export type SkillSubgroup = keyof typeof skillSubgroups;
const skillSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: localized,
  category: z.enum(
    Object.keys(categories) as [SkillCategory, ...SkillCategory[]],
  ),
  subgroup: z.enum(
    Object.keys(skillSubgroups) as [SkillSubgroup, ...SkillSubgroup[]],
  ),
  keywords: z.string(),
});
export type Skill = z.infer<typeof skillSchema>;
const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/#/g, 'sharp')
    .replace(/\+/g, 'p')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
export const skills = z.array(skillSchema).parse(
  skillTree.flatMap(([category, groups]) =>
    groups.flatMap(([subgroup, items]) =>
      items.map(([name, keywords]) => {
        const label = typeof name === 'string' ? l(name, name) : name;
        return {
          id: slug(label.en),
          name: label,
          category,
          subgroup,
          keywords,
        };
      }),
    ),
  ),
);
/** Search suggestions shown as chips above the skill grid. */
export const skillSuggestions = [
  l('JS-Framework', 'JS framework'),
  l('Datenbank', 'Database'),
  l('Shop', 'Shop'),
  l('CMS', 'CMS'),
  l('KI', 'AI'),
  l('CI/CD', 'CI/CD'),
  l('Test', 'Test'),
  l('Windows', 'Windows'),
];
/**
 * Searchable text for a skill: names, sub-group labels and synonyms. Area
 * labels stay out on purpose: "Datenbank" must not match every data format.
 */
export function skillSearchText(skill: Skill) {
  return [
    skill.name.de,
    skill.name.en,
    skillSubgroups[skill.subgroup].de,
    skillSubgroups[skill.subgroup].en,
    skill.keywords,
  ].join(' ');
}
