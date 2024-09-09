import LanguageSupporter from './multilanguage';

export default {
  install: (app, options) => {
    app.config.globalProperties.$i18nRoute = (to) => {
      return LanguageSupporter.i18nRoute(to);
    };
  }
};
