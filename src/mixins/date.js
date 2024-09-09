import LanguageSupporter from 'src/i18n/plugins/multilanguage';

export default {
  methods: {
    /**
     * Parse date to locale date string
     * @param {int} date
     */
    dateToLocaleString: function (date) {
      switch (LanguageSupporter.currentLocale) {
        case 'fr':
          return date.toLocaleDateString('fr-FR');
        default:
          return date.toLocaleDateString('en-EN');
      }
    }
  }
};
