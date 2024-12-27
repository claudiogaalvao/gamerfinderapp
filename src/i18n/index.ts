import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import translationEn from "./locales/en-US/translation.json";
import translationPt from "./locales/pt-BR/translation.json";

const resources = {
  "en-US": { translation: translationEn },
  "pt-BR": { translation: translationPt },
};

const initI18n = async () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en-US",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
