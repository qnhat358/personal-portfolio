import { createI18n } from 'vue-i18n';
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from './constants';

function loadLocaleMessages() {
  const locales = import.meta.glob('./locales/*.json');

  const messages = {};

  Object.keys(locales).forEach((key) => {
    const matched = key.match(/(?<locale>\w{2})\.json/i);

    if (matched && matched.length > 1) {
      const locale = matched.groups.locale;

      locales[key]().then((json) => {
        messages[locale] = json.default;
      });
    }
  });

  return messages;
}

const i18n = createI18n({
  locale: DEFAULT_LANGUAGE,
  fallbackLocale: FALLBACK_LANGUAGE,
  messages: loadLocaleMessages()
});

export default i18n;
