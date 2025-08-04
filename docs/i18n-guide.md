# i18n Implementation Guide

This document describes the internationalization (i18n) implementation for the Gaian Landing Page.

## 🌍 Overview

Our i18n implementation supports multiple languages with automatic browser language detection, localStorage persistence, and AI-powered translation capabilities.

### Currently Supported Languages
- 🇺🇸 English (en) - Default
- 🇻🇳 Vietnamese (vi)
- 🇵🇭 Filipino/Tagalog (phili)

## 📁 Structure

```
public/locales/
├── en/translation.json      # English (base language)
├── vi/translation.json      # Vietnamese
└── phili/translation.json   # Filipino

src/
├── lib/i18n.ts             # i18n configuration
├── contexts/LanguageContext.tsx  # Language state management
├── hooks/useTranslations.ts      # Type-safe translation hooks
└── components/Lang/index.tsx     # Language selector component

scripts/
├── translate.js            # AI translation script
└── i18n-config.js         # Configuration file
```

## 🚀 Quick Start

### 1. Basic Usage

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('heroSection.title.Neobank')}</h1>
      <p>{t('aboutPage.subtitle')}</p>
    </div>
  );
}
```

### 2. Type-Safe Hooks

```tsx
import { useTranslations, useHeroTranslations } from '@/hooks/useTranslations';

function HeroSection() {
  const { title } = useHeroTranslations();
  
  return (
    <h1>
      {title.the} {title.neobank} {title.for} {title.business}
    </h1>
  );
}
```

### 3. Language Selector

```tsx
import { LanguageSelector } from '@/components/Lang';

// Default variant (for header)
<LanguageSelector />

// Mobile variant (for mobile menu)
<LanguageSelector variant="mobile" />

// Compact variant (for footer)
<LanguageSelector variant="compact" />
```

## 🔧 Configuration

### Language Detection Priority

1. **localStorage** - Previously saved user preference
2. **navigator.language** - Browser language setting
3. **fallback** - English (default)

### Browser Language Mapping

The system automatically maps browser language codes to supported languages:

```javascript
'en-US' → 'en'
'vi-VN' → 'vi'
'tl-PH' → 'phili' (Tagalog)
'fil-PH' → 'phili' (Filipino)
```

## 🤖 AI Translation

### Manual Translation

Run the translation script to generate translations for all supported languages:

```bash
# Translate to all configured languages
npm run translate

# Translate to specific language
npm run translate:vi
npm run translate:phili

# Translate to multiple specific languages
npm run translate:all
```

### Setting up OpenAI (Optional)

1. Get an OpenAI API key
2. Set environment variable: `OPENAI_API_KEY=your_key_here`
3. Update the translation script to use real OpenAI API instead of mock

```javascript
// In scripts/translate.js, uncomment the real OpenAI implementation
async function translateWithAI(text, targetLanguage, context = '') {
  const { Configuration, OpenAIApi } = require('openai');
  // ... rest of implementation
}
```

## 📝 Adding New Languages

### 1. Add Language Configuration

Update `scripts/i18n-config.js`:

```javascript
supportedLanguages: {
  // ... existing languages
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    direction: 'ltr',
    currency: 'EUR',
    dateFormat: 'DD/MM/YYYY',
  },
},

enabledLanguages: ['en', 'vi', 'phili', 'es'],
```

### 2. Update Language Context

Add to `src/contexts/LanguageContext.tsx`:

```typescript
const availableLanguages: LanguageOption[] = [
  // ... existing languages
  { code: "es", name: "Español", flag: "🇪🇸" },
];
```

### 3. Update i18n Configuration

Add to `src/lib/i18n.ts`:

```typescript
import es from "../../public/locales/es/translation.json";

// In resources
resources: {
  // ... existing
  es: { translation: es },
},
```

### 4. Generate Translation Files

```bash
npm run translate:es
```

## 🎯 Best Practices

### 1. Translation Keys

Use descriptive, hierarchical keys:

```json
{
  "navigation": {
    "Product": {
      "label": "Product",
      "submenu": {
        "paymentDapp": "Payment dApp"
      }
    }
  },
  "heroSection": {
    "title": {
      "neobank": "Neobank"
    }
  }
}
```

### 2. Component Organization

- **Server Components**: Use for SEO metadata only
- **Client Components**: Use for dynamic content with translations
- **Separate Concerns**: Create client components for translated content

```tsx
// page.tsx (Server Component)
export const metadata = {
  title: "About Gaian | Open Infra for a World in Flow",
  // Static metadata
};

export default function AboutPage() {
  return <AboutClient />; // Delegate to client component
}

// AboutClient.tsx (Client Component)
"use client";
export default function AboutClient() {
  const { t } = useTranslation();
  return <h1>{t('aboutPage.title')}</h1>;
}
```

### 3. Performance

- **Lazy Loading**: Languages load only when needed
- **Caching**: Translations cached in localStorage
- **Suspense**: Disabled for SSR compatibility

## 🐛 Troubleshooting

### Common Issues

1. **Hydration Mismatch**: Ensure client/server language consistency
2. **Missing Translations**: Check translation keys and file structure
3. **Build Errors**: Verify all translation files are valid JSON

### Debug Mode

Enable debug mode in development:

```typescript
// src/lib/i18n.ts
debug: process.env.NODE_ENV === 'development',
```

### Checking Translation Coverage

```bash
# Use the validation script to check missing keys
node scripts/validate-translations.js
```

## 📊 Monitoring

### Analytics Integration

Track language usage:

```typescript
// In LanguageContext.tsx
const changeLanguage = (lang: string) => {
  // ... existing code
  
  // Analytics tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'language_change', {
      new_language: lang,
      previous_language: currentLanguage,
    });
  }
};
```

### Performance Monitoring

Monitor translation loading times and user language preferences to optimize the experience.

## 🔄 Maintenance

### Regular Tasks

1. **Update Translations**: When adding new content, update English first
2. **Re-generate**: Run translation script for new content
3. **Review**: Have native speakers review AI-generated translations
4. **Test**: Verify all languages work correctly after updates

### Version Control

- Commit translation files with feature changes
- Use meaningful commit messages for translation updates
- Consider using branches for major translation updates

## 🌟 Future Enhancements

- [ ] Automatic translation on content changes
- [ ] Translation management UI
- [ ] Pluralization support
- [ ] Date/number formatting per locale
- [ ] RTL language support
- [ ] Translation validation in CI/CD pipeline
