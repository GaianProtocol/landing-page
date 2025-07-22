"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";
import React, { useEffect } from "react";

export const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();

  useEffect(() => {
    console.log(currentLanguage)
  }, [currentLanguage])

  const selectedLanguage = availableLanguages.find(
    (lang) => lang.code === currentLanguage
  );

  return (
    <div className="relative mt-3 md:mt-0 hidden md:block group">
      {/* Nút chọn ngôn ngữ */}
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200">
        <span className="flex flex-row items-center gap-1">
          <span className="text-black text-sm font-medium underline">
            {selectedLanguage?.name}
          </span>
        </span>

        <svg
          className="w-4 h-4 text-white transition-transform duration-200 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div className="absolute right-0 mt-2 w-48 md:w-56 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
        {availableLanguages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors ${
              currentLanguage === lang.code
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700"
            }`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="font-medium">{lang.name}</span>
            {currentLanguage === lang.code && (
              <Check className="w-4 h-4 ml-auto text-blue-600" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
