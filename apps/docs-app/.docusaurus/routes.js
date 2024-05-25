import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', 'f5d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'af9'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f6c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '112'),
            routes: [
              {
                path: '/docs',
                component: ComponentCreator('/docs', 'c54'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/contributing',
                component: ComponentCreator('/docs/contributing', 'd49'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/contributors',
                component: ComponentCreator('/docs/contributors', 'ce6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/experimental/sfc',
                component: ComponentCreator('/docs/experimental/sfc', 'a70'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/api/overview',
                component: ComponentCreator('/docs/features/api/overview', '611'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/data-fetching/server-side-data-fetching',
                component: ComponentCreator('/docs/features/data-fetching/server-side-data-fetching', '124'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/deployment/overview',
                component: ComponentCreator('/docs/features/deployment/overview', '290'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/deployment/providers',
                component: ComponentCreator('/docs/features/deployment/providers', '1b7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/generation/code-generation',
                component: ComponentCreator('/docs/features/generation/code-generation', '359'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/routing/content',
                component: ComponentCreator('/docs/features/routing/content', 'a7b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/routing/metadata',
                component: ComponentCreator('/docs/features/routing/metadata', 'bcc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/routing/overview',
                component: ComponentCreator('/docs/features/routing/overview', 'e31'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/server/server-side-rendering',
                component: ComponentCreator('/docs/features/server/server-side-rendering', '41e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/server/static-site-generation',
                component: ComponentCreator('/docs/features/server/static-site-generation', 'ce7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/testing/overview',
                component: ComponentCreator('/docs/features/testing/overview', 'a66'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/testing/vitest',
                component: ComponentCreator('/docs/features/testing/vitest', '383'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/updating/overview',
                component: ComponentCreator('/docs/features/updating/overview', '3c8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '575'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/guides/compatibility',
                component: ComponentCreator('/docs/guides/compatibility', '996'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/guides/migrating',
                component: ComponentCreator('/docs/guides/migrating', '138'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/integrations/angular-material',
                component: ComponentCreator('/docs/integrations/angular-material', 'b94'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/integrations/ionic',
                component: ComponentCreator('/docs/integrations/ionic', '1aa'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/integrations/nx',
                component: ComponentCreator('/docs/integrations/nx', '4da'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/packages/astro-angular/overview',
                component: ComponentCreator('/docs/packages/astro-angular/overview', 'c09'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/packages/create-analog/overview',
                component: ComponentCreator('/docs/packages/create-analog/overview', '816'),
                exact: true
              },
              {
                path: '/docs/packages/router/overview',
                component: ComponentCreator('/docs/packages/router/overview', '741'),
                exact: true
              },
              {
                path: '/docs/packages/vite-plugin-angular/css-preprocessors',
                component: ComponentCreator('/docs/packages/vite-plugin-angular/css-preprocessors', 'eb1'),
                exact: true
              },
              {
                path: '/docs/packages/vite-plugin-angular/overview',
                component: ComponentCreator('/docs/packages/vite-plugin-angular/overview', '54d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/sponsoring',
                component: ComponentCreator('/docs/sponsoring', '142'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7cc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
