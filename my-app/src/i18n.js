import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locales/en.json';
import iceTranslation from '../locales/ice.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  ice: {
    translation: iceTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ice', // Default language
    fallbackLng: 'ice', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false,
    },
    pluralSeparator: '_', // Set plural separator to match ICU message syntax
  });

export default i18n;
