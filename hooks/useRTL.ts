import { useLocale } from 'next-intl';
import { isRTL, Locale } from '@/i18n/config';

export function useRTL() {
    const locale = useLocale() as Locale;
    const isRtl = isRTL(locale);

    return {
        isRtl,
        direction: isRtl ? 'rtl' : 'ltr',
        locale
    };
}