// scripts/i18n-config.js

/**
 * i18n Configuration for Gaian Landing Page
 * This file contains all the configuration for internationalization
 */

module.exports = {
  // Supported languages with their metadata
  supportedLanguages: {
    en: {
      name: 'English',
      nativeName: 'English',
      flag: '🇺🇸',
      direction: 'ltr',
      currency: 'USD',
      dateFormat: 'MM/DD/YYYY',
    },
    vi: {
      name: 'Vietnamese',
      nativeName: 'Tiếng Việt',
      flag: '🇻🇳',
      direction: 'ltr',
      currency: 'VND',
      dateFormat: 'DD/MM/YYYY',
    },
    phili: {
      name: 'Filipino',
      nativeName: 'Filipino',
      flag: '🇵🇭',
      direction: 'ltr',
      currency: 'PHP',
      dateFormat: 'MM/DD/YYYY',
    },
    es: {
      name: 'Spanish',
      nativeName: 'Español',
      flag: '🇪🇸',
      direction: 'ltr',
      currency: 'EUR',
      dateFormat: 'DD/MM/YYYY',
    },
    fr: {
      name: 'French',
      nativeName: 'Français',
      flag: '🇫🇷',
      direction: 'ltr',
      currency: 'EUR',
      dateFormat: 'DD/MM/YYYY',
    },
    de: {
      name: 'German',
      nativeName: 'Deutsch',
      flag: '🇩🇪',
      direction: 'ltr',
      currency: 'EUR',
      dateFormat: 'DD.MM.YYYY',
    },
    ja: {
      name: 'Japanese',
      nativeName: '日本語',
      flag: '🇯🇵',
      direction: 'ltr',
      currency: 'JPY',
      dateFormat: 'YYYY/MM/DD',
    },
    ko: {
      name: 'Korean',
      nativeName: '한국어',
      flag: '🇰🇷',
      direction: 'ltr',
      currency: 'KRW',
      dateFormat: 'YYYY.MM.DD',
    },
    zh: {
      name: 'Chinese (Simplified)',
      nativeName: '简体中文',
      flag: '🇨🇳',
      direction: 'ltr',
      currency: 'CNY',
      dateFormat: 'YYYY-MM-DD',
    },
    th: {
      name: 'Thai',
      nativeName: 'ไทย',
      flag: '🇹🇭',
      direction: 'ltr',
      currency: 'THB',
      dateFormat: 'DD/MM/YYYY',
    },
    id: {
      name: 'Indonesian',
      nativeName: 'Bahasa Indonesia',
      flag: '🇮🇩',
      direction: 'ltr',
      currency: 'IDR',
      dateFormat: 'DD/MM/YYYY',
    },
    ms: {
      name: 'Malay',
      nativeName: 'Bahasa Melayu',
      flag: '🇲🇾',
      direction: 'ltr',
      currency: 'MYR',
      dateFormat: 'DD/MM/YYYY',
    },
  },

  // Default language
  defaultLanguage: 'en',

  // Languages that are currently enabled
  enabledLanguages: ['en', 'vi', 'phili'],

  // Browser language detection mapping
  languageMapping: {
    'en': 'en',
    'en-US': 'en',
    'en-GB': 'en',
    'en-CA': 'en',
    'en-AU': 'en',
    'vi': 'vi',
    'vi-VN': 'vi',
    'tl': 'phili', // Tagalog
    'tl-PH': 'phili',
    'fil': 'phili', // Filipino
    'fil-PH': 'phili',
    'es': 'es',
    'es-ES': 'es',
    'es-MX': 'es',
    'fr': 'fr',
    'fr-FR': 'fr',
    'fr-CA': 'fr',
    'de': 'de',
    'de-DE': 'de',
    'ja': 'ja',
    'ja-JP': 'ja',
    'ko': 'ko',
    'ko-KR': 'ko',
    'zh': 'zh',
    'zh-CN': 'zh',
    'zh-TW': 'zh',
    'th': 'th',
    'th-TH': 'th',
    'id': 'id',
    'id-ID': 'id',
    'ms': 'ms',
    'ms-MY': 'ms',
  },

  // Namespace configuration
  namespaces: ['translation', 'common', 'errors'],

  // Translation context prompts for AI
  translationContext: {
    global: `
You are translating content for Gaian, a fintech company that provides stablecoin payment infrastructure.
Key terms to preserve or translate consistently:
- "Gaian" (brand name) - keep unchanged
- "stablecoin" - use established translation or keep as is
- "API", "SDK", "QR" - technical terms, usually keep as is
- "neobank" - digital bank / challenger bank
- "DApp" - decentralized application
`,
    navigation: 'These are navigation menu items - keep them concise and clear.',
    hero: 'This is hero section content - should be impactful and engaging.',
    feature: 'This describes product features - should be clear and benefit-focused.',
    faq: 'This is FAQ content - should be clear and helpful for users.',
    footer: 'This is footer content - usually brief and informational.',
  },

  // File paths
  paths: {
    locales: 'public/locales',
    scripts: 'scripts',
    source: 'public/locales/en/translation.json',
  },

  // OpenAI settings (if using AI translation)
  openai: {
    model: 'gpt-4',
    maxTokens: 500,
    temperature: 0.3,
    topP: 1,
    frequencyPenalty: 0,
    presencePenalty: 0,
  },

  // Validation rules
  validation: {
    maxLength: {
      navigation: 20,
      button: 25,
      title: 100,
      description: 500,
    },
    requiredKeys: [
      'common.scanToPay',
      'common.getStarted',
      'navigation.Product.label',
      'navigation.Developers.label',
      'navigation.Blog.label',
      'navigation.About.label',
      'navigation.Support.label',
      'heroSection.title.The',
      'heroSection.title.Neobank',
      'heroSection.title.For',
      'heroSection.title.Business',
      'heroSection.title.Everyone',
    ],
  },
};
