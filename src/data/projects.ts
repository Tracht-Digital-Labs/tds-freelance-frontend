import { z } from 'zod';
import { l, localized } from './locale';
import additionalProjects from './projects.json' with { type: 'json' };

export const projectSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  approved: z.literal(true),
  kind: z
    .enum(['client', 'employer', 'own', 'demo', 'study', 'development'])
    .default('own'),
  careerId: z.string().optional(),
  /** Featured projects open their group and span the full grid width. */
  featured: z.boolean().default(false),
  title: localized,
  summary: localized,
  category: localized,
  stage: localized,
  role: localized,
  tech: z.array(z.string()).min(1),
  sections: z.array(z.object({ title: localized, text: localized })).min(1),
  image: z.string().optional(),
  imageWidth: z.number().positive().default(1000),
  imageHeight: z.number().positive().default(625),
  /** Short headline for the drawn cover of a project without a screenshot. */
  cover: z.string().optional(),
  github: z.url().optional(),
  website: z.url().optional(),
});
export type Project = z.infer<typeof projectSchema>;
// Only individually approved records belong here. Research stays outside Git.
export const projects: Project[] = z.array(projectSchema).parse([
  {
    id: 'tds-hauptwebsite',
    kind: 'own',
    imageWidth: 1000,
    imageHeight: 625,
    careerId: 'tracht-digital-solutions',
    approved: true,
    image: '/images/tds-hauptwebsite-2611e.webp',
    title: l('Tracht Digital Solutions', 'Tracht Digital Solutions'),
    summary: l(
      'Meine Unternehmenswebsite: Leistungen, Projekte und Kontakt auf Deutsch und Englisch, gebaut mit Astro.',
      'My company website: services, projects and contact in German and English, built with Astro.',
    ),
    category: l('Webentwicklung', 'Web development'),
    stage: l('Live-Website', 'Live website'),
    role: l(
      'Eigenes Unternehmen · Konzeption & Entwicklung',
      'My company · Concept & development',
    ),
    tech: ['Astro', 'TypeScript', 'TDS Designsystem', 'GitHub Actions'],
    website: 'https://tracht-digital.de',
    github:
      'https://github.com/Tracht-Digital-Solutions/tds-landingpage-frontend',
    sections: [
      {
        title: l('Projekt', 'Project'),
        text: l(
          'Die Website zeigt Leistungen, Projekte und den Ablauf einer Zusammenarbeit. Ein Leistungsassistent und ein Fragebogen, der die Zeitersparnis ausrechnet, helfen beim Einstieg. Im Hero dreht sich ein Karussell mit Demos und Designstudien.',
          'The website shows services, projects and how a collaboration works. A service assistant and a questionnaire that works out the time saved help people get started. A carousel of demos and design studies turns in the hero.',
        ),
      },
      {
        title: l('Technik', 'Technology'),
        text: l(
          'Astro rendert die Seiten auf dem Server, ein Seiten-Cache liefert sie schnell aus. Das gemeinsame TDS-Designsystem bringt Farben, Bausteine und Übersetzungen mit.',
          'Astro renders the pages on the server and a page cache serves them quickly. The shared TDS design system provides colours, components and translations.',
        ),
      },
    ],
  },
  {
    id: 'td-tools',
    kind: 'own',
    imageWidth: 1000,
    imageHeight: 625,
    careerId: 'tracht-digital-solutions',
    approved: true,
    image: '/images/td-tools-2611e.webp',
    title: l('Online-Tools', 'Online-Tools'),
    summary: l(
      'Kostenlose Online-Tools für kleine Betriebe, etwa Bildkompressor, QR-Code- und Impressum-Generator.',
      'Free online tools for small businesses, such as an image compressor and QR code and legal notice generators.',
    ),
    category: l('Plattform & Werkzeuge', 'Platform & tools'),
    stage: l('Live-Plattform', 'Live platform'),
    role: l(
      'Eigenes Unternehmen · Plattformkonzeption & Entwicklung',
      'My company · Platform design & development',
    ),
    tech: ['Astro', 'TypeScript', 'Tool-Pakete', 'Browser APIs'],
    website: 'https://tools.tracht-digital.de',
    github: 'https://github.com/Tracht-Digital-Solutions/tds-tools-frontend',
    sections: [
      {
        title: l('Projekt', 'Project'),
        text: l(
          'Jedes Werkzeug ist ein eigenes Paket. Ein gemeinsamer Vertrag regelt, wie es in die Plattform kommt. So lassen sich Tools einzeln weiterentwickeln.',
          'Every tool is its own package. A shared contract defines how it joins the platform, so tools can evolve one by one.',
        ),
      },
      {
        title: l('Technik', 'Technology'),
        text: l(
          'Die meisten Tools arbeiten direkt im Browser, Dateien verlassen dabei das Gerät nicht. Erweiterte Funktionen gibt es im Premium-Abo.',
          'Most tools run directly in the browser, so files stay on the device. Extended features come with a premium subscription.',
        ),
      },
    ],
  },
  ...additionalProjects,
]);
/** Display order of the project groups on the overview page. */
export const projectKinds = {
  client: l('Kundenprojekt', 'Client project'),
  employer: l('Berufliches Projekt', 'Employment project'),
  own: l('Eigenes Projekt', 'Own project'),
  demo: l('Demo', 'Demo'),
  study: l('Designstudie', 'Design study'),
  development: l('In Entwicklung', 'In development'),
};
/** Section headings and one-line intros for the grouped project overview. */
export const projectGroups: Record<
  keyof typeof projectKinds,
  { title: ReturnType<typeof l>; intro: ReturnType<typeof l> }
> = {
  client: {
    title: l('Kundenprojekte', 'Client projects'),
    intro: l(
      'Aufträge als Selbstständiger. Kunden ohne Freigabe bleiben anonym, ohne Zeitraum und ohne Zuordnung.',
      'Freelance engagements. Clients without consent stay anonymous, without dates or attribution.',
    ),
  },
  employer: {
    title: l('Berufliche Projekte', 'Employment projects'),
    intro: l(
      'Aus meinen Anstellungen und der Ausbildung.',
      'From my employment and apprenticeship.',
    ),
  },
  own: {
    title: l('Eigene Projekte & Open Source', 'Own projects & open source'),
    intro: l(
      'Eigene Produkte, Werkzeuge und Open-Source-Projekte.',
      'My own products, tools and open-source projects.',
    ),
  },
  development: {
    title: l('In Entwicklung', 'In development'),
    intro: l(
      'Laufende Vorhaben mit offenem Stand. Der jeweilige Reifegrad steht auf der Karte.',
      'Ongoing work with an open status. Each card states its maturity.',
    ),
  },
  demo: {
    title: l('Demos', 'Demos'),
    intro: l(
      'Fiktive Unternehmen, um Gestaltung und Technik zu zeigen.',
      'Fictional businesses that show design and technology.',
    ),
  },
  study: {
    title: l('Designstudien', 'Design studies'),
    intro: l(
      'Gestaltungsentwürfe ohne Kundenauftrag.',
      'Design concepts without a client brief.',
    ),
  },
};
