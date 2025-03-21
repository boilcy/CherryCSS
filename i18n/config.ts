export type Locale = (typeof locales)[number];

export const locales = ['en-US', 'ja-JP', 'ru-RU', 'zh-CN'] as const;

// Fallback locale if detection fails
export const fallbackLocale: Locale = 'zh-CN';

// Function to detect user's locale from browser
export function detectUserLocale(acceptLanguageHeader?: string): Locale {
  // Return fallback if running on server without headers
  if (typeof window === 'undefined' && !acceptLanguageHeader) {
    return fallbackLocale;
  }
  
  // Get browser languages either from header or navigator
  let browserLanguages: string[] = [];
  if (typeof window !== 'undefined' && navigator.languages) {
    // Client-side detection
    browserLanguages = Array.from(navigator.languages);
  } else if (acceptLanguageHeader) {
    // Server-side detection from Accept-Language header
    browserLanguages = acceptLanguageHeader
      .split(',')
      .map(lang => lang.split(';')[0].trim());
  }
  
  // Match browser languages against our supported locales
  for (const browserLang of browserLanguages) {
    // Try exact match first
    const exactMatch = locales.find(locale => 
      locale.toLowerCase() === browserLang.toLowerCase()
    );
    if (exactMatch) return exactMatch;
    
    // Try matching just the language part (en-US -> en)
    const langCode = browserLang.split('-')[0].toLowerCase();
    const partialMatch = locales.find(locale => 
      locale.toLowerCase().startsWith(langCode)
    );
    if (partialMatch) return partialMatch;
  }
  
  // Fall back to default if no match found
  return fallbackLocale;
}

// For backward compatibility, but consider using detectUserLocale() instead
export const defaultLocale: Locale = fallbackLocale;