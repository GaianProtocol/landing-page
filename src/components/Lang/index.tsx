"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Check, ChevronDown, Globe } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface LanguageSelectorProps {
  variant?: 'default' | 'mobile' | 'compact';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  variant = 'default',
  className = ''
}) => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log('Current language:', currentLanguage);
  }, [currentLanguage]);

  const selectedLanguage = availableLanguages.find(
    (lang) => lang.code === currentLanguage
  );

  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-language-selector]')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  // Mobile variant
  if (variant === 'mobile') {
    return (
      <div className={`w-full ${className}`} data-language-selector>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600 mb-3">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">Language</span>
          </div>
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-3 text-left flex items-center gap-3 rounded-lg transition-colors ${
                currentLanguage === lang.code
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="font-medium flex-1">{lang.name}</span>
              {currentLanguage === lang.code && (
                <Check className="w-4 h-4 text-green-600" />
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Compact variant
  if (variant === 'compact') {
    return (
      <div className={`relative ${className}`} data-language-selector>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 px-2 py-1 rounded text-sm hover:bg-gray-100 transition-colors"
        >
          <span>{selectedLanguage?.flag}</span>
          <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm ${
                  currentLanguage === lang.code
                    ? "bg-green-50 text-green-700"
                    : "text-gray-700"
                }`}
              >
                <span>{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {currentLanguage === lang.code && (
                  <Check className="w-3 h-3 ml-auto text-green-600" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`relative mt-3 md:mt-0 hidden md:block group ${className}`} data-language-selector>
      {/* Language selector button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
      >
        <span className="flex flex-row items-center gap-2">
          <Globe className="w-4 h-4 text-gray-600" />
          <span className="text-black text-sm font-medium">
            {selectedLanguage?.name}
          </span>
        </span>

        <ChevronDown
          className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 md:w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="p-2">
            <div className="text-xs font-medium text-gray-500 px-3 py-2">
              {t('common.selectLanguage') || 'Select Language'}
            </div>
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-3 py-2 text-left flex items-center gap-3 rounded-md hover:bg-gray-50 transition-colors ${
                  currentLanguage === lang.code
                    ? "bg-green-50 text-green-700"
                    : "text-gray-700"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium flex-1">{lang.name}</span>
                {currentLanguage === lang.code && (
                  <Check className="w-4 h-4 text-green-600" />
                )}
              </button>
            ))}
          </div>
          
          {/* Footer with language info */}
          <div className="border-t border-gray-100 px-3 py-2">
            <div className="text-xs text-gray-500">
              Auto-detected: {navigator.language || 'Unknown'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
