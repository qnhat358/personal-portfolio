import axios from 'axios';
import i18n from 'src/i18n';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from 'src/i18n/constants';

const LanguageSupporter = {
  get defaultLocale() {
    return DEFAULT_LANGUAGE;
  },
  get supportedLocales() {
    return Object.keys(SUPPORTED_LANGUAGES);
  },
  get currentLocale() {
    if (i18n.mode === 'legacy') {
      return i18n.global.locale;
    } else {
      return i18n.global.locale.value;
    }
  },
  set currentLocale(lang) {
    if (i18n.mode === 'legacy') {
      i18n.global.locale = lang;
    } else {
      i18n.global.locale.value = lang;
    }
  },
  getLocaleName(lang) {
    return SUPPORTED_LANGUAGES[lang];
  },
  /**
   * Gets the first supported language that matches the user's.
   * @return {String}
   */
  getUserSupportedLang() {
    const userPreferredLang = LanguageSupporter.getUserLang();

    // Check if user preferred browser lang with locale ISO is supported.
    // EX: en-US
    if (LanguageSupporter.isLangSupported(userPreferredLang.lang)) {
      return userPreferredLang.lang;
    }

    // Check if user preferred lang without the ISO is supported.
    // EX: en
    if (LanguageSupporter.isLangSupported(userPreferredLang.langNoISO)) {
      return userPreferredLang.langNoISO;
    }

    return LanguageSupporter.defaultLocale;
  },
  /**
   * Returns the users preferred language.
   */
  getUserLang() {
    const lang =
      window.navigator.language ||
      window.navigator.userLanguage ||
      LanguageSupporter.defaultLocale;

    return {
      lang: lang,
      langNoISO: lang.split('-')[0]
    };
  },
  /**
   * Checks if a lang is supported.
   * @param {String} lang
   * @return {boolean}
   */
  isLangSupported(lang) {
    return LanguageSupporter.supportedLocales.includes(lang);
  },
  /**
   * Loads new translation messages and changes the language when finished
   * @param {String} lang
   * @return {String} lang
   */
  changeLocale(lang) {
    if (!LanguageSupporter.isLangSupported(lang))
      return new Error('Language not supported');

    // if the locale is unchanged
    if (i18n.locale === lang) return lang;

    return this.setI18nLanguageInServices(lang);
  },
  /**
   * Sets the language to various services (axios, the html tag, etc)
   * @param {String} lang
   * @return {String} lang
   */
  setI18nLanguageInServices(lang) {
    LanguageSupporter.currentLocale = lang;
    axios.defaults.headers.common['Accept-Language'] = lang;
    document.querySelector('html').setAttribute('lang', lang);
    return lang;
  },
  /**
   * Checks if the route's param is supported, if not, redirects to the first supported one.
   * @param {Route} to
   * @param {Route} from
   * @param {Function} next
   * @return {*}
   */
  routeMiddleware(to, from, next) {
    let { locale } = to.params;

    if (!LanguageSupporter.isLangSupported(locale))
      locale = LanguageSupporter.getUserSupportedLang();

    LanguageSupporter.changeLocale(locale);

    // if locale is equal to the default, hide it from the path
    if (locale === LanguageSupporter.defaultLocale) {
      locale = '';
    }

    next();
  },
  /**
   * Returns a new route object that has the current language already defined
   * To be used on pages and components, outside of the main \ route, like on Headers and Footers.
   * @example <router-link :to="$i18nRoute({ name: 'someRoute'})">Click Me </router-link>
   * @param {Object} to - route object to construct
   */
  i18nRoute(to) {
    const locale =
      LanguageSupporter.currentLocale === LanguageSupporter.defaultLocale
        ? ''
        : LanguageSupporter.currentLocale;

    const obj = {
      ...to,
      params: { locale, ...to.params }
    };
    return obj;
  }
};

export default LanguageSupporter;
