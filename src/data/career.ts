import { z } from 'zod';
import { l, localized } from './locale';

export const careerSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  company: z.string().min(1),
  period: localized,
  role: localized,
  summary: localized,
  tasks: z.array(localized).min(1),
  tech: z.array(z.string()).min(1),
});
export const career = z.array(careerSchema).parse([
  {
    id: 'tracht-digital-solutions',
    company: 'Tracht Digital Solutions',
    period: l('Seit Ende 2024', 'Since late 2024'),
    role: l(
      'Selbstständig · Softwareentwicklung & Digitalisierung',
      'Self-employed · Software development & digitalisation',
    ),
    summary: l(
      'Individuelle Software- und Weblösungen, die Geschäftsprozesse verständlicher und einfacher machen.',
      'Custom software and web solutions that make business processes clearer and simpler.',
    ),
    tasks: [
      l(
        'Projekte eigenständig planen, Anforderungen klären und technische Lösungen konzipieren.',
        'Independently plan projects, clarify requirements and design technical solutions.',
      ),
      l(
        'Software umsetzen und Projekte von der Konzeption bis zur direkten Kundenabstimmung begleiten.',
        'Implement software and guide projects from conception through direct client communication.',
      ),
      l(
        'Shop-Systeme weiterentwickeln, Plugins und Designs erstellen sowie PIM- und ERP-Systeme anbinden.',
        'Develop shop systems, build plugins and designs, and integrate PIM and ERP systems.',
      ),
    ],
    tech: [
      'WooCommerce',
      'Shopware 6',
      'Magento 2',
      'TYPO3',
      'KNIME',
      'n8n',
      'Astro',
      'React',
      'Projektmanagement',
    ],
  },
  {
    id: 'amotiq',
    company: 'amotIQ automotive GmbH',
    period: l('11/2023 – 06/2024', '11/2023 – 06/2024'),
    role: l('Backend-Entwickler', 'Backend developer'),
    summary: l(
      'Backend-Entwicklung für Automotive-Supply-Chain-Software mit C# und ASP.NET Core.',
      'Backend development for automotive supply chain software with C# and ASP.NET Core.',
    ),
    tasks: [
      l(
        'Backend-Funktionen entwickeln und Fehler analysieren und beheben.',
        'Develop backend functionality and analyse and resolve bugs.',
      ),
      l(
        'BPMN-Prozesse bearbeiten und neue Feature-Anforderungen abstimmen.',
        'Work on BPMN processes and coordinate new feature requirements.',
      ),
      l(
        'UX-Fragestellungen und Oberflächenkonzeption unterstützen.',
        'Support UX questions and interface concepts.',
      ),
    ],
    tech: ['C#', 'ASP.NET Core', 'Camunda', 'BPMN', 'xUnit', 'UX'],
  },
  {
    id: 'maverick',
    company: 'Maverick Media Consulting GmbH',
    period: l('07/2021 – 11/2023', '07/2021 – 11/2023'),
    role: l('Frontend-Entwickler', 'Frontend developer'),
    summary: l(
      'Datenintensive Verwaltungssoftware und interne Webanwendungen mit Vue.js.',
      'Data-intensive administration software and internal web applications with Vue.js.',
    ),
    tasks: [
      l(
        'An Planung, Design, Entwicklung und Dokumentation von Webanwendungen mitarbeiten.',
        'Contribute to planning, design, development and documentation of web applications.',
      ),
      l(
        'Abläufe automatisieren und Software testen.',
        'Automate processes and test software.',
      ),
      l(
        'Stabilität und Betrieb von Entwicklungs- und Produktionsumgebungen sicherstellen.',
        'Maintain stability and operation of development and production environments.',
      ),
    ],
    tech: ['Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Testing'],
  },
  {
    id: 'pav-card',
    company: 'PAV Card GmbH',
    period: l('08/2018 – 06/2021', '08/2018 – 06/2021'),
    role: l(
      'Ausbildung · Fachinformatiker Anwendungsentwicklung',
      'Apprenticeship · IT specialist for application development',
    ),
    summary: l(
      'Softwareentwicklung zwischen Web, Windows-Anwendungen und automatisierten Datenworkflows.',
      'Software development spanning web, Windows applications and automated data workflows.',
    ),
    tasks: [
      l(
        'Frontend, Backend und Windows-Desktopanwendungen mit C#, SQL, REST und XML entwickeln.',
        'Develop frontend, backend and Windows desktop applications with C#, SQL, REST and XML.',
      ),
      l(
        'E-Commerce sowie automatisierte Druck- und Datenworkflows bearbeiten.',
        'Work on e-commerce and automated print and data workflows.',
      ),
      l(
        'Mit Jenkins und Atlassian-Produkten arbeiten.',
        'Work with Jenkins and Atlassian products.',
      ),
    ],
    tech: [
      'C#',
      '.NET',
      'Angular',
      'WPF',
      'Magento 2',
      'SQL',
      'REST',
      'XML',
      'Jenkins',
    ],
  },
]);
export const education = [
  {
    period: '2018 – 2021',
    title: l(
      'Fachinformatiker Anwendungsentwicklung',
      'IT specialist for application development',
    ),
    institution: 'PAV Card GmbH / Emil-Possehl-Schule',
  },
  {
    period: '2018',
    title: l(
      'Fachhochschulreife',
      'University of applied sciences entrance qualification',
    ),
    institution: 'Alfred-Nobel-Schule, Geesthacht',
  },
];
