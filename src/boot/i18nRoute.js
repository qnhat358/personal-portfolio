import { boot } from 'quasar/wrappers';
import i18nRoute from 'src/i18n/plugins/i18nRoutePlugin';

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18nRoute);
});
