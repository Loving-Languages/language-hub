import { createI18n } from 'vue-i18n';

const messages = {
    en: {
    },
    es: {
    },
    de: {
    },
    fr: {
    }
};

export default createI18n({
    locale: navigator.language,
    fallbackLocale: 'en',
    messages
});