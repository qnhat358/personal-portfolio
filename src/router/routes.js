import LanguageSupporter from '/src/i18n/plugins/multilanguage.js';

const routes = [
  {
    path: '/:locale(en|fr|vi)?',
    component: () => import('layouts/MainLayout.vue'),
    beforeEnter: LanguageSupporter.routeMiddleware,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: (to) => {
      return { name: 'notFound' };
    }
  }
];

export default routes;
