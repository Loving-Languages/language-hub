import { createI18n } from 'vue-i18n';

import en from '@/i18n/en.json';
import es from '@/i18n/es.json';
import de from '@/i18n/de.json';
import fr from '@/i18n/fr.json';

const messages = {
    en: {
        ...en
    },
    es: {
        ...es
    },
    de: {
        ...de
    },
    fr: {
        ...fr
    }
};

const preferredLocale = window.localStorage.getItem('preferredLocale');

export default createI18n({
    locale: preferredLocale || 'en',
    fallbackLocale: 'en',
    messages
});