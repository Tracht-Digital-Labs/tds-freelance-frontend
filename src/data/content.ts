import { l, type Locale } from './locale';
import { career } from './career';
import { skills } from './skills';
import { certificates } from './certificates';
import { projects, projectSchema } from './projects';

export * from './locale';
export * from './career';
export * from './skills';
export * from './certificates';
export * from './projects';

export const profile = {
  name: 'Julian Tracht',
  company: 'Tracht Digital Solutions',
  city: 'Schwarzenbek',
  email: 'kontakt@tracht-digital.de',
  phone: '+49 4151 8788264',
  mobile: '+49 178 822 4022',
  github: 'https://github.com/jtracht',
  linkedin: 'https://www.linkedin.com/in/julian-tracht/',
  role: l(
    'Fullstack-Entwickler & Projektmanagement',
    'Full-Stack Developer & Project Management',
  ),
};
export const views = [
  {
    id: 'home',
    paths: { de: '/', en: '/en/' },
    title: l('Start', 'Home'),
    description: l(
      'Julian Tracht: Fullstack-Entwicklung, Projektmanagement und digitale Lösungen. Persönlichkeit, Berufserfahrung und Kompetenzen im Überblick.',
      'Meet Julian Tracht: full-stack development, project management and digital solutions. Explore his background, skills and approach.',
    ),
  },
  {
    id: 'about',
    paths: { de: '/ueber-mich/', en: '/en/about/' },
    title: l('Über mich', 'About me'),
    description: l(
      'Von LEGO Mindstorms zur Softwareentwicklung: meine Geschichte, Motivation und die Werte Qualität, Transparenz und Fairness.',
      'From LEGO Mindstorms to software development: my story, motivation and commitment to quality, transparency and fairness.',
    ),
  },
  {
    id: 'career',
    paths: { de: '/karriere/', en: '/en/career/' },
    title: l('Karriere', 'Career'),
    description: l(
      'Mein beruflicher Weg: Selbstständigkeit, Backend- und Frontend-Entwicklung sowie Ausbildung zum Fachinformatiker.',
      'My professional journey through independent work, backend and frontend development, and vocational training in software development.',
    ),
  },
  {
    id: 'skills',
    paths: { de: '/faehigkeiten/', en: '/en/skills/' },
    title: l('Fähigkeiten', 'Skills'),
    description: l(
      'Mein technisches Profil: Technologien, Schnittstellen, E-Commerce, Projektmanagement und Softwarequalität mit interaktiven Filtern.',
      'Explore my technical profile: technologies, APIs, e-commerce, project management and software quality, with interactive filters.',
    ),
  },
  {
    id: 'projects',
    paths: { de: '/projekte/', en: '/en/projects/' },
    title: l('Projekte', 'Projects'),
    description: l(
      'Individuelle Softwareentwicklung von der Anforderung bis zur Umsetzung. Ein Einblick in meine Arbeitsweise und Projektgespräche.',
      'Custom software development from requirements to implementation. Explore my working process and discuss a project.',
    ),
  },
  {
    id: 'certifications',
    paths: { de: '/zertifikate/', en: '/en/certifications/' },
    title: l('Zertifikate', 'Certifications'),
    description: l(
      '13 Weiterbildungszertifikate in Projektmanagement, Softwareentwicklung, Cloud, Datenanalyse, KI und Sicherheit.',
      '13 learning certificates in project management, software development, cloud, data analysis, AI and security.',
    ),
  },
  {
    id: 'ai',
    paths: { de: '/ki-softwarequalitaet/', en: '/en/ai-software-quality/' },
    title: l('KI & Softwarequalität', 'AI & software quality'),
    description: l(
      'Meine Haltung zu KI in der Softwareentwicklung: schneller arbeiten, Architektur verstehen und Qualität verantwortungsvoll prüfen.',
      'My approach to AI in software development: work faster, understand the architecture and take responsibility for quality.',
    ),
  },
  {
    id: 'contact',
    paths: { de: '/kontakt/', en: '/en/contact/' },
    title: l('Kontakt', 'Contact'),
    description: l(
      'Kontakt zu Julian Tracht für individuelle Softwareprojekte oder Jobangebote über Tracht Digital Solutions.',
      'Contact Julian Tracht about custom software projects or job opportunities through Tracht Digital Solutions.',
    ),
  },
] as const;
export type ViewId = (typeof views)[number]['id'];
export function pathFor(id: ViewId, lang: Locale) {
  return views.find((v) => v.id === id)!.paths[lang];
}
export function contactUrl(lang: Locale) {
  return `https://tracht-digital.de/${lang === 'en' ? 'en/' : ''}#contact`;
}
export function validateContent() {
  for (const [name, items] of Object.entries({
    career,
    skills,
    certificates,
    projects,
  })) {
    const ids = items.map((i) => i.id);
    if (new Set(ids).size !== ids.length)
      throw new Error(`Duplicate ${name} ID`);
  }
  for (const project of projects) {
    projectSchema.parse(project);
    if (
      project.careerId &&
      !career.some((entry) => entry.id === project.careerId)
    )
      throw new Error(`Unknown career reference: ${project.id}`);
  }
  const paths = views.flatMap((v) => Object.values(v.paths));
  if (new Set(paths).size !== paths.length) throw new Error('Duplicate route');
}
validateContent();
export const allRoutes = () => [
  ...views.flatMap((view) =>
    (['de', 'en'] as const).map((lang) => ({
      path: view.paths[lang],
      lang,
      id: view.id,
    })),
  ),
  ...career.flatMap((c) =>
    (['de', 'en'] as const).map((lang) => ({
      path: `${pathFor('career', lang)}${c.id}/`,
      lang,
      id: 'career' as const,
      detail: c.id,
    })),
  ),
  ...projects.flatMap((p) =>
    (['de', 'en'] as const).map((lang) => ({
      path: `${pathFor('projects', lang)}${p.id}/`,
      lang,
      id: 'projects' as const,
      detail: p.id,
    })),
  ),
];
