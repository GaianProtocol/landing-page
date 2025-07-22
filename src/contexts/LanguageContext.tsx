"use client";

import React from "react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useTranslation } from "react-i18next";

interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}

const availableLanguages: LanguageOption[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "phili", name: "Philippines", flag: "🇵🇭" },
];

interface LanguageContextProps {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  availableLanguages: LanguageOption[];
}

export const LanguageContext = createContext<LanguageContextProps>({
  currentLanguage: "en",
  changeLanguage: () => {},
  availableLanguages: availableLanguages,
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");


  useEffect(() => {
    const savedLanguage =
      typeof window !== "undefined"
        ? localStorage.getItem("userLanguage")
        : null;

    if (
      savedLanguage &&
      availableLanguages.some((lang) => lang.code === savedLanguage)
    ) {
      setCurrentLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    } else {
      const browserLang =
        typeof navigator !== "undefined"
          ? navigator.language.split("-")[0]
          : "en";
      const supportedLangs = availableLanguages.map((lang) => lang.code);
      const langToUse = supportedLangs.includes(browserLang)
        ? browserLang
        : "en";
      setCurrentLanguage(langToUse);
      i18n.changeLanguage(langToUse);
      if (typeof window !== "undefined") {
        localStorage.setItem("userLanguage", langToUse);
      }
    }
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    if (availableLanguages.some((option) => option.code === lang)) {
      setCurrentLanguage(lang);
      if (typeof window !== "undefined") {
        localStorage.setItem("userLanguage", lang);
      }
      i18n.changeLanguage(lang);
    } else {
      console.warn(`Language code "${lang}" is not supported.`);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, changeLanguage, availableLanguages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
