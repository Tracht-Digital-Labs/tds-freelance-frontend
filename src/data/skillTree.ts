import { l } from './locale';
import type { SkillCategory, SkillSubgroup } from './skills';

/** The skill inventory: area → sub-group → [name, search keywords]. */
export type SkillInput = [name: string | { de: string; en: string }, keywords: string];
export const skillTree: [SkillCategory, [SkillSubgroup, SkillInput[]][]][] = [
  [
    'frontend',
    [
      [
        'web-languages',
        [
          [
            'JavaScript',
            'js ecmascript es6 programmiersprache programming language web frontend',
          ],
          [
            'TypeScript',
            'ts js javascript typisiert typed programmiersprache programming language web frontend backend',
          ],
          [
            'HTML',
            'html5 markup web frontend semantik semantic barrierefreiheit accessibility',
          ],
          [
            'CSS',
            'css3 styling stylesheet layout responsive animation webdesign web frontend',
          ],
        ],
      ],
      [
        'web-frameworks',
        [
          [
            'Vue.js',
            'vue vue2 vue3 js-framework js framework javascript-framework frontend-framework spa komponenten components',
          ],
          [
            'React',
            'reactjs jsx js-framework js framework javascript-framework frontend-framework spa komponenten components bibliothek library',
          ],
          [
            'Angular',
            'angularjs typescript js-framework js framework javascript-framework frontend-framework spa',
          ],
          [
            'Astro',
            'js-framework js framework javascript-framework frontend-framework static site generator ssg ssr islands seo',
          ],
          [
            'Preact',
            'react js-framework js framework javascript-framework frontend-framework leichtgewichtig lightweight pwa',
          ],
        ],
      ],
      [
        'web-design',
        [
          [
            'Tailwind CSS',
            'tailwind css-framework css framework utility styling designsystem design system',
          ],
          [
            'Figma',
            'design ui ux prototyp prototype mockup wireframe gestaltung',
          ],
          [
            'Web Components',
            'custom elements shadow dom js javascript standard komponenten components',
          ],
          [
            l('UX-Mockups', 'UX mockups'),
            'ux ui wireframe prototyp prototype konzept concept design adobe xd gestaltung',
          ],
        ],
      ],
    ],
  ],
  [
    'backend',
    [
      [
        'backend-languages',
        [
          [
            'C#',
            'csharp c-sharp dotnet .net microsoft programmiersprache programming language backend',
          ],
          [
            'PHP',
            'php8 server backend programmiersprache programming language wordpress typo3 slim',
          ],
          [
            'Python',
            'py scripting skript script pandas automatisierung automation programmiersprache programming language backend',
          ],
        ],
      ],
      [
        'backend-frameworks',
        [
          ['.NET', 'dotnet net core framework microsoft c# csharp'],
          [
            'ASP.NET Core',
            'aspnet asp.net dotnet .net web api backend-framework framework microservices c#',
          ],
          [
            'Slim 4',
            'slim php-framework php framework microframework rest api backend-framework',
          ],
          [
            'Node.js',
            'node nodejs js javascript runtime laufzeit server backend',
          ],
        ],
      ],
      [
        'backend-interfaces',
        [
          [
            l('REST-APIs', 'REST APIs'),
            'rest api apis schnittstelle schnittstellen interface http json endpunkte endpoints integration',
          ],
          [
            'Swagger / OpenAPI',
            'swagger openapi api-dokumentation api documentation schnittstelle interface',
          ],
          [
            'Camunda',
            'bpmn workflow engine prozess process orchestrierung orchestration microservices external tasks',
          ],
          [
            'MCP',
            'model context protocol ki ai schnittstelle interface agent plugin llm',
          ],
        ],
      ],
    ],
  ],
  [
    'systems',
    [
      [
        'desktop',
        [
          ['WPF', 'windows desktop xaml .net dotnet c# gui oberfläche'],
          ['WinForms', 'windows forms desktop .net dotnet c# gui oberfläche'],
          ['XAML', 'wpf markup ui windows desktop'],
        ],
      ],
      [
        'mobile',
        [
          [
            'Kotlin',
            'android jvm mobile app programmiersprache programming language',
          ],
          ['Jetpack Compose', 'android compose ui mobile app wear os kotlin'],
        ],
      ],
      [
        'embedded',
        [
          [
            'Rust',
            'systemprogrammierung systems programming programmiersprache programming language native',
          ],
          [
            'C++',
            'cpp c++17 cmake systemnah native windows programmiersprache programming language',
          ],
          ['GTK 4', 'gtk gui linux wayland desktop oberfläche'],
          [
            'Raspberry Pi',
            'raspi arm arm64 embedded linux hardware iot einplatinencomputer',
          ],
        ],
      ],
    ],
  ],
  [
    'data',
    [
      [
        'databases',
        [
          [
            'SQL',
            'datenbank database db abfragen queries rdbms relational migration optimierung',
          ],
          ['MySQL', 'datenbank database db sql relational'],
          ['MariaDB', 'datenbank database db sql relational mysql'],
          ['PostgreSQL', 'postgres datenbank database db sql relational'],
          ['SQLite', 'datenbank database db sql embedded lokal local'],
        ],
      ],
      [
        'formats',
        [
          ['JSON', 'datenformat data format api schnittstelle'],
          ['XML', 'xsd schema datenformat data format'],
          ['CSV', 'tabellen tables import export datenformat data format'],
          [
            'Excel',
            'tabellen spreadsheet tables reporting statistik import export',
          ],
        ],
      ],
    ],
  ],
  [
    'commerce',
    [
      [
        'shops',
        [
          [
            'WooCommerce',
            'shop shopsystem onlineshop online shop e-commerce ecommerce wordpress checkout',
          ],
          [
            'Shopware 6',
            'shopware shop shopsystem onlineshop online shop e-commerce ecommerce',
          ],
          [
            'Magento 2',
            'magento adobe commerce shop shopsystem onlineshop online shop e-commerce ecommerce php',
          ],
        ],
      ],
      [
        'cms',
        [
          [
            'WordPress',
            'cms content management blog php themes plugins website',
          ],
          [
            'TYPO3',
            'cms content management fluid typoscript php website extensions',
          ],
          ['Storyblok', 'headless cms content management redaktion'],
        ],
      ],
      [
        'product-data',
        [
          [
            l('Multichannel-Feeds', 'Multichannel feeds'),
            'marktplatz marktplätze marketplace preisvergleich price comparison feed produktdaten product data e-commerce shop',
          ],
          [
            'PIM / ERP',
            'produktdaten product data warenwirtschaft schnittstelle integration e-commerce shop',
          ],
        ],
      ],
    ],
  ],
  [
    'automation',
    [
      [
        'workflows',
        [
          [
            'KNIME',
            'etl datenpipeline data pipeline workflow automatisierung automation low-code datenverarbeitung',
          ],
          [
            'n8n',
            'workflow automatisierung automation low-code integration ki ai',
          ],
          ['Pandas', 'python datenanalyse data analysis etl datenverarbeitung'],
        ],
      ],
      [
        'ai',
        [
          [
            l('Lokale LLMs', 'Local LLMs'),
            'ki ai künstliche intelligenz artificial intelligence llm sprachmodell language model self-hosted',
          ],
          [
            'LoRA Fine-Tuning',
            'ki ai training finetuning fine tuning modell model llm',
          ],
          ['Prompt Engineering', 'ki ai prompts prompting llm'],
          [
            'ComfyUI',
            'ki ai bildgenerierung image generation generative workflow 3d',
          ],
          ['Claude', 'ki ai coding agent assistent assistant llm anthropic'],
          ['Codex', 'ki ai coding agent assistent assistant llm'],
        ],
      ],
    ],
  ],
  [
    'quality',
    [
      [
        'ci-cd',
        [
          ['Git', 'versionierung version control vcs repository'],
          [
            'GitHub Actions',
            'ci cd ci/cd pipeline workflow automatisierung automation github',
          ],
          ['Gitea Actions', 'ci cd ci/cd pipeline runner self-hosted gitea'],
          ['GitLab CI', 'ci cd ci/cd pipeline gitlab'],
          ['Jenkins', 'ci cd ci/cd pipeline build deployment'],
          [
            'CI/CD',
            'ci cd continuous integration delivery pipeline automatisierung automation',
          ],
        ],
      ],
      [
        'infrastructure',
        [
          ['Docker', 'container devops self-hosted runner compose'],
          ['Linux', 'server debian ubuntu shell bash ssh sftp hosting devops'],
          [
            'Deployment',
            'release rollout veröffentlichung hosting rollback devops',
          ],
        ],
      ],
      [
        'testing',
        [
          ['Testing', 'test tests testen qualität quality qa unit integration'],
          [
            'Playwright',
            'e2e end-to-end browser test tests automatisierung automation qa',
          ],
          ['xUnit', 'unit test tests .net dotnet c# qa'],
          ['Vitest', 'unit test tests js javascript typescript qa'],
          ['Grafana', 'monitoring logs logging observability dashboard'],
        ],
      ],
    ],
  ],
  [
    'process',
    [
      [
        'methods',
        [
          [
            l('Projektmanagement', 'Project management'),
            'projekt project planung planning management pm',
          ],
          [
            'Scrum',
            'agil agile sprint daily retro retrospektive projektmanagement',
          ],
          [
            'BPMN',
            'prozessmodellierung process modelling camunda workflow geschäftsprozess business process',
          ],
        ],
      ],
      [
        'team-tools',
        [
          ['Jira', 'atlassian tickets issues boards projektmanagement'],
          ['Confluence', 'atlassian wiki dokumentation documentation'],
          ['Bitbucket', 'atlassian git repository versionierung'],
          ['Azure DevOps', 'microsoft tickets boards repos pipelines'],
        ],
      ],
      [
        'consulting',
        [
          [
            l('Beratung', 'Consulting'),
            'consulting digitalisierung digitalisation it-beratung konzept concept',
          ],
          [
            l('Prozesskonzeption', 'Process design'),
            'prozess process konzept concept digitalisierung workflow',
          ],
        ],
      ],
    ],
  ],
];
