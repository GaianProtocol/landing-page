#!/usr/bin/env node

/**
 * Translation Validation Script for Gaian Landing Page
 * Validates that all translation keys exist between English and Philippine files
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const LOCALES_DIR = path.join(BASE_DIR, 'public', 'locales');
const ENGLISH_FILE = path.join(LOCALES_DIR, 'en', 'translation.json');

// Color codes for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  reset: '\x1b[0m',
};

function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`;
}

// Recursively get all keys from an object
function getAllKeys(obj, prefix = '') {
  const keys = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null) {
      keys.push(...getAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  
  return keys;
}

// Get value from nested object using dot notation
function getValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Check if a translation value is valid
function isValidTranslation(value) {
  if (typeof value !== 'string') return false;
  if (value.trim() === '') return false;
  if (value.startsWith('[') && value.includes(']')) return false; // Placeholder translations
  return true;
}

// Validate a single language file
function validateLanguageFile(languageCode, referenceKeys, referenceData) {
  const languageFile = path.join(LOCALES_DIR, languageCode, 'translation.json');
  
  if (!fs.existsSync(languageFile)) {
    console.log(colorize(`❌ File not found: ${languageFile}`, 'red'));
    return { valid: false, errors: [`File not found: ${languageFile}`] };
  }

  let languageData;
  try {
    languageData = JSON.parse(fs.readFileSync(languageFile, 'utf8'));
  } catch (error) {
    console.log(colorize(`❌ Invalid JSON in ${languageFile}: ${error.message}`, 'red'));
    return { valid: false, errors: [`Invalid JSON: ${error.message}`] };
  }

  const languageKeys = getAllKeys(languageData);
  const errors = [];
  const warnings = [];

  // Check for missing keys
  const missingKeys = referenceKeys.filter(key => !languageKeys.includes(key));
  if (missingKeys.length > 0) {
    errors.push(`Missing keys: ${missingKeys.join(', ')}`);
  }

  // Check for extra keys
  const extraKeys = languageKeys.filter(key => !referenceKeys.includes(key));
  if (extraKeys.length > 0) {
    warnings.push(`Extra keys: ${extraKeys.join(', ')}`);
  }

  // Check for invalid translations
  const invalidTranslations = [];
  for (const key of referenceKeys) {
    const value = getValue(languageData, key);
    if (!isValidTranslation(value)) {
      invalidTranslations.push(key);
    }
  }

  if (invalidTranslations.length > 0) {
    errors.push(`Invalid translations: ${invalidTranslations.join(', ')}`);
  }

  // Check for translation length compared to English
  const lengthWarnings = [];
  for (const key of referenceKeys) {
    const englishValue = getValue(referenceData, key);
    const translatedValue = getValue(languageData, key);
    
    if (typeof englishValue === 'string' && typeof translatedValue === 'string') {
      const ratio = translatedValue.length / englishValue.length;
      if (ratio > 2.5) {
        lengthWarnings.push(`${key} (${ratio.toFixed(1)}x longer than English)`);
      }
    }
  }

  if (lengthWarnings.length > 0) {
    warnings.push(`Unusually long translations: ${lengthWarnings.join(', ')}`);
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    stats: {
      totalKeys: referenceKeys.length,
      translatedKeys: languageKeys.filter(key => referenceKeys.includes(key)).length,
      missingKeys: missingKeys.length,
      extraKeys: extraKeys.length,
      invalidTranslations: invalidTranslations.length,
    }
  };
}

// Main validation function
function validateTranslations() {
  console.log(colorize('🌍 Validating Translation Files', 'cyan'));
  console.log('='.repeat(50));

  // Read English file as reference
  if (!fs.existsSync(ENGLISH_FILE)) {
    console.log(colorize(`❌ English reference file not found: ${ENGLISH_FILE}`, 'red'));
    process.exit(1);
  }

  let englishData;
  try {
    englishData = JSON.parse(fs.readFileSync(ENGLISH_FILE, 'utf8'));
  } catch (error) {
    console.log(colorize(`❌ Invalid English JSON: ${error.message}`, 'red'));
    process.exit(1);
  }

  const referenceKeys = getAllKeys(englishData);
  console.log(colorize(`📚 Reference (English): ${referenceKeys.length} keys`, 'blue'));
  console.log('');

  // Get all language directories - focus only on Philippine for validation
  const languageDirs = fs.readdirSync(LOCALES_DIR).filter(dir => {
    return fs.statSync(path.join(LOCALES_DIR, dir)).isDirectory() && 
           dir !== 'en' && 
           dir === 'phili'; // Only validate Philippine language
  });

  const results = [];
  let overallValid = true;

  // Validate each language
  for (const lang of languageDirs) {
    console.log(colorize(`🔍 Validating ${lang}...`, 'yellow'));
    
    const result = validateLanguageFile(lang, referenceKeys, englishData);
    results.push({ language: lang, ...result });

    if (result.valid) {
      console.log(colorize(`✅ ${lang}: Valid`, 'green'));
    } else {
      console.log(colorize(`❌ ${lang}: Invalid`, 'red'));
      overallValid = false;
    }

    // Show stats
    const { stats } = result;
    const completeness = ((stats.translatedKeys / stats.totalKeys) * 100).toFixed(1);
    console.log(`   📊 Completeness: ${completeness}% (${stats.translatedKeys}/${stats.totalKeys})`);

    if (stats.missingKeys > 0) {
      console.log(colorize(`   🚫 Missing: ${stats.missingKeys} keys`, 'red'));
    }

    if (stats.invalidTranslations > 0) {
      console.log(colorize(`   ⚠️  Invalid: ${stats.invalidTranslations} translations`, 'yellow'));
    }

    if (stats.extraKeys > 0) {
      console.log(colorize(`   ➕ Extra: ${stats.extraKeys} keys`, 'yellow'));
    }

    // Show errors
    if (result.errors.length > 0) {
      console.log(colorize('   Errors:', 'red'));
      result.errors.forEach(error => {
        console.log(colorize(`     • ${error}`, 'red'));
      });
    }

    // Show warnings
    if (result.warnings.length > 0) {
      console.log(colorize('   Warnings:', 'yellow'));
      result.warnings.forEach(warning => {
        console.log(colorize(`     • ${warning}`, 'yellow'));
      });
    }

    console.log('');
  }

  // Summary
  console.log('='.repeat(50));
  console.log(colorize('📋 Summary', 'cyan'));
  console.log(`Languages validated: ${languageDirs.length}`);
  console.log(`Overall status: ${overallValid ? colorize('✅ All Valid', 'green') : colorize('❌ Issues Found', 'red')}`);

  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    englishKeys: referenceKeys.length,
    languages: results,
    overallValid,
  };

  const reportFile = path.join(BASE_DIR, 'translation-report.json');
  fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
  console.log(colorize(`📄 Report saved: ${reportFile}`, 'blue'));

  // Exit with error code if validation failed
  if (!overallValid) {
    process.exit(1);
  }
}

// CLI command handling
function showUsage() {
  console.log('Usage: node validate-translations.js [options]');
  console.log('');
  console.log('Options:');
  console.log('  --help, -h    Show this help message');
  console.log('  --json        Output results in JSON format');
  console.log('  --lang <code> Validate specific language only');
  console.log('');
  console.log('Examples:');
  console.log('  node validate-translations.js');
  console.log('  node validate-translations.js --lang vi');
  console.log('  node validate-translations.js --json');
}

// Parse command line arguments
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  showUsage();
  process.exit(0);
}

// Run validation
if (require.main === module) {
  validateTranslations();
}

module.exports = {
  validateLanguageFile,
  getAllKeys,
  getValue,
  isValidTranslation,
};
