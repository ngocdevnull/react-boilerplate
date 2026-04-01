import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import authenticationEn from '@/locale/authentication/en.json';
import authenticationVi from '@/locale/authentication/vi.json';
import commonEn from '@/locale/common/en.json';
import commonVi from '@/locale/common/vi.json';

const language = navigator.language.toLowerCase().startsWith('vi') ? 'vi' : 'en';

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: commonEn,
      authentication: authenticationEn,
    },
    vi: {
      common: commonVi,
      authentication: authenticationVi,
    },
  },
  lng: language,
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: ['common', 'authentication'],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
