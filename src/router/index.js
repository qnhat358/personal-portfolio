import { route } from 'quasar/wrappers';
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory
} from 'vue-router';
import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  });

  Router.beforeEach((to, _) => {
    updateAlternateLinkTag(to.path);
  });

  return Router;
});

function updateAlternateLinkTag(currentPath) {
  const existingAlternateLinkTags = document.querySelectorAll(
    "link[rel='alternate']"
  );
  if (existingAlternateLinkTags)
    for (let tag of existingAlternateLinkTags) tag.remove();

  const regex = /^(\/(en|fr))?(\/.+)?(\/)?$/;
  const currentPathWithoutLocale = currentPath.replace(regex, '$3');
  for (const locale of ['en', 'fr', '']) {
    const alternatePath = `${process.env.BASE_URL}${
      locale ? '/' + locale : ''
    }${currentPathWithoutLocale}`;

    var link = document.createElement('link');
    link.rel = 'alternate';
    link.href = alternatePath;
    link.hreflang = locale ? locale : 'x-default';

    document.head.appendChild(link);
  }
}
