#!/usr/bin/env node

/**
 * AI Translation Script for Gaian Landing Page
 * 
 * This script reads the English translation.json file and uses OpenAI API
 * to translate it to target languages while preserving the JSON structure.
 * 
 * Usage:
 * 1. Set OPENAI_API_KEY environment variable
 * 2. Run: node scripts/translate.js
 * 
 * Or for specific languages:
 * node scripts/translate.js --languages vi,phili
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SUPPORTED_LANGUAGES = {
  'phili': 'Filipino (Tagalog)',
};

const BASE_DIR = path.join(__dirname, '..');
const LOCALES_DIR = path.join(BASE_DIR, 'public', 'locales');
const ENGLISH_FILE = path.join(LOCALES_DIR, 'en', 'translation.json');

// Mock translation function (replace with actual OpenAI API call)
async function translateWithAI(text, targetLanguage, context = '') {
  // This is a mock implementation
  // In production, replace this with actual OpenAI API call
  console.log(`Translating "${text}" to ${targetLanguage}`);
  
  // For demo purposes, return a placeholder
  if (targetLanguage === 'Vietnamese') {
    return `[VI] ${text}`;
  }
  if (targetLanguage === 'Filipino (Tagalog)') {
    return `[PH] ${text}`;
  }
  return `[${targetLanguage.substring(0, 2).toUpperCase()}] ${text}`;
}

// Real OpenAI API implementation (uncomment and configure)
/*
async function translateWithAI(text, targetLanguage, context = '') {
  const { Configuration, OpenAIApi } = require('openai');
  
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const prompt = `
You are a professional translator. Translate the following text to ${targetLanguage}.
Context: This is for a financial technology (fintech) website about digital payments and stablecoin infrastructure.

Guidelines:
- Maintain the tone and style appropriate for a tech/finance website
- Keep technical terms like "stablecoin", "API", "SDK" as they are or use commonly accepted translations
- Preserve any HTML tags or special formatting
- If it's a navigation item or button text, keep it concise
- For brand names like "Gaian", keep them unchanged

Text to translate: "${text}"

Translation:`;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 200,
      temperature: 0.3,
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(`Translation error for "${text}":`, error.message);
    return text; // Return original text if translation fails
  }
}
*/

// Recursive function to translate nested JSON objects
async function translateObject(obj, targetLanguage, keyPath = []) {
  const translatedObj = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const currentPath = [...keyPath, key];
    const context = `Key path: ${currentPath.join('.')}`;
    
    if (typeof value === 'string') {
      console.log(`Translating: ${currentPath.join('.')} = "${value}"`);
      translatedObj[key] = await translateWithAI(value, targetLanguage, context);
      
      // Add small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    } else if (typeof value === 'object' && value !== null) {
      translatedObj[key] = await translateObject(value, targetLanguage, currentPath);
    } else {
      translatedObj[key] = value;
    }
  }
  
  return translatedObj;
}

// Main translation function
async function translateToLanguage(languageCode) {
  const languageName = SUPPORTED_LANGUAGES[languageCode];
  if (!languageName) {
    console.error(`Unsupported language code: ${languageCode}`);
    return;
  }

  console.log(`\n🌍 Translating to ${languageName} (${languageCode})...`);

  try {
    // Read English translation file
    const englishContent = JSON.parse(fs.readFileSync(ENGLISH_FILE, 'utf8'));
    
    // Translate the content
    const translatedContent = await translateObject(englishContent, languageName);
    
    // Ensure target directory exists
    const targetDir = path.join(LOCALES_DIR, languageCode);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Write translated file
    const targetFile = path.join(targetDir, 'translation.json');
    fs.writeFileSync(targetFile, JSON.stringify(translatedContent, null, 2), 'utf8');
    
    console.log(`✅ Translation completed: ${targetFile}`);
  } catch (error) {
    console.error(`❌ Error translating to ${languageName}:`, error.message);
  }
}

// CLI argument parsing
function parseArgs() {
  const args = process.argv.slice(2);
  let targetLanguages = Object.keys(SUPPORTED_LANGUAGES);
  
  const languageArgIndex = args.indexOf('--languages');
  if (languageArgIndex !== -1 && args[languageArgIndex + 1]) {
    targetLanguages = args[languageArgIndex + 1].split(',').map(lang => lang.trim());
  }
  
  return targetLanguages;
}

// Main execution
async function main() {
  console.log('🚀 Starting AI Translation Script for Gaian Landing Page');
  
  // Check if English file exists
  if (!fs.existsSync(ENGLISH_FILE)) {
    console.error(`❌ English translation file not found: ${ENGLISH_FILE}`);
    process.exit(1);
  }
  
  const targetLanguages = parseArgs();
  
  console.log(`📚 Target languages: ${targetLanguages.join(', ')}`);
  
  // Translate to each target language
  for (const lang of targetLanguages) {
    if (lang === 'en') continue; // Skip English
    await translateToLanguage(lang);
  }
  
  console.log('\n🎉 All translations completed!');
  console.log('\n📝 Next steps:');
  console.log('1. Review the generated translation files');
  console.log('2. Update language names and flags in LanguageContext.tsx if needed');
  console.log('3. Test the translations in your application');
}

// Export for potential module usage
module.exports = {
  translateToLanguage,
  translateWithAI,
  SUPPORTED_LANGUAGES,
};

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}
