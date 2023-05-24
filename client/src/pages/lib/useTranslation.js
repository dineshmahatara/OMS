import { createContext, useContext,useEffect, useState } from "react";

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [locale, setLocale] = useState("en");
  const [translations, setTranslations] = useState({});

  const loadTranslations = async (locale) => {
    const translation = await import(`../../locales/${locale}.json`);

    setTranslations(translation);
  };

  useEffect(() => {
    loadTranslations(locale);
  }, [locale]);

  return (
    <TranslationContext.Provider value={{ locale, setLocale, translations }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const { locale, setLocale, translations } = useContext(TranslationContext);

  function t(key) {
    return translations[key] || key;
  }

  return { t, locale, setLocale };
}
