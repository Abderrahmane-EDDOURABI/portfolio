import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./locales/fr/fr.json";
import en from "./locales/en/en.json";
import frHeader from "./locales/fr/frHeader.json";
import enHeader from "./locales/en/enHeader.json";
import frHome from "./locales/fr/frHome.json";
import enHome from "./locales/en/enHome.json";
import frAbout from "./locales/fr/frAbout.json";
import enAbout from "./locales/en/enAbout.json";
import frProjects from "./locales/fr/frProjects.js";
import enProjects from "./locales/en/enProjects.js";
import frContact from "./locales/fr/frContact.json";
import enContact from "./locales/en/enContact.json";
import frServices from "./locales/fr/frServices.js";
import enServices from "./locales/en/enServices.js";

const savedLang = localStorage.getItem("i18nextLng") || "fr"; // Récupère la langue enregistrée

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: fr,
      header: frHeader,
      home: frHome,
      about: frAbout,
      projects: frProjects,
      services: frServices,
      contact: frContact,
    },
    en: {
      translation: en,
      header: enHeader,
      home: enHome,
      about: enAbout,
      projects: enProjects,
      services: enServices,
      contact: enContact,
    },
  },
  lng: savedLang, // Langue par défaut
  fallbackLng: "en", // Langue de secours si la traduction n'existe pas
  ns: ["header", "home", "about", "services", "projects", "contact"],
  interpolation: { escapeValue: false },
});

export default i18n;
