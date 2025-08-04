// src/hooks/useTranslations.ts
"use client";

import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';

// Type definitions for translation keys (expand as needed)
export type TranslationKey = 
  | 'common.english'
  | 'common.scanToPay'
  | 'common.getStarted'
  | 'common.selectLanguage'
  | 'common.language'
  | 'common.loading'
  | 'common.error'
  | 'common.success'
  | 'common.close'
  | 'common.submit'
  | 'common.cancel'
  | 'navigation.Product.label'
  | 'navigation.Developers.label'
  | 'navigation.Blog.label'
  | 'navigation.About.label'
  | 'navigation.Support.label'
  | 'heroSection.title.The'
  | 'heroSection.title.Neobank'
  | 'heroSection.title.For'
  | 'heroSection.title.Business'
  | 'heroSection.title.Everyone'
  | 'heroSection.requestBusiness'
  | 'heroSection.launchApp'
  | 'featureSection.tag'
  | 'featureSection.title'
  | 'featureSection.subtitle'
  | 'trustedSection.tag'
  | 'faqSection.tag'
  | 'faqSection.title.main'
  | 'faqSection.title.highlight';

interface UseTranslationsReturn {
  t: (key: TranslationKey, options?: any) => string;
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  isLoading: boolean;
  availableLanguages: Array<{
    code: string;
    name: string;
    flag: string;
  }>;
}

/**
 * Enhanced translation hook with type safety and additional utilities
 */
export function useTranslations(): UseTranslationsReturn {
  const { t, ready } = useTranslation();
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();

  return {
    t: (key: TranslationKey, options?: any) => t(key, options) as string,
    currentLanguage,
    changeLanguage,
    isLoading: !ready,
    availableLanguages,
  };
}

/**
 * Hook specifically for navigation translations
 */
export function useNavigationTranslations() {
  const { t } = useTranslations();
  
  return {
    product: t('navigation.Product.label'),
    developers: t('navigation.Developers.label'),
    blog: t('navigation.Blog.label'),
    about: t('navigation.About.label'),
    support: t('navigation.Support.label'),
  };
}

/**
 * Hook for common UI translations
 */
export function useCommonTranslations() {
  const { t } = useTranslations();
  
  return {
    loading: t('common.loading'),
    error: t('common.error'),
    success: t('common.success'),
    close: t('common.close'),
    submit: t('common.submit'),
    cancel: t('common.cancel'),
    scanToPay: t('common.scanToPay'),
    getStarted: t('common.getStarted'),
  };
}

/**
 * Hook for hero section translations
 */
export function useHeroTranslations() {
  const { t } = useTranslations();
  
  return {
    title: {
      the: t('heroSection.title.The'),
      neobank: t('heroSection.title.Neobank'),
      for: t('heroSection.title.For'),
      business: t('heroSection.title.Business'),
      everyone: t('heroSection.title.Everyone'),
    },
    requestBusiness: t('heroSection.requestBusiness'),
    launchApp: t('heroSection.launchApp'),
  };
}

/**
 * Utility function to check if a translation key exists
 */
export function hasTranslation(key: string): boolean {
  const { t } = useTranslation();
  const translation = t(key, { defaultValue: '__MISSING__' });
  return translation !== '__MISSING__';
}

/**
 * Utility function to get translation with fallback
 */
export function translateWithFallback(key: string, fallback: string): string {
  const { t } = useTranslation();
  const translation = t(key, { defaultValue: fallback });
  return translation;
}
