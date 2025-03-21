import { NextRequest, NextResponse } from 'next/server';
import { detectUserLocale, locales } from './i18n/config';

export function middleware(request: NextRequest) {
  // Get preferred locale from Accept-Language header
  const userLocale = detectUserLocale(request.headers.get('Accept-Language') || undefined);
  
  // Redirect if needed or set locale in headers/cookies
  // Your redirection or locale setting logic here
} 