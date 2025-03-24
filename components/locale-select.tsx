import { setUserLocale } from '@/hooks/locale';
import { useLocale, useTranslations } from 'next-intl';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Icon } from '@iconify/react';

export default function LocaleSelect() {
    const t = useTranslations('locale');
    const locale = useLocale();
    return (
        <Select onValueChange={setUserLocale} defaultValue={locale}>
            <Icon icon="mdi:language" className="w-6 h-6" />
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t('select')} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en-US">{t('en-US')}</SelectItem>
                <SelectItem value="ja-JP">{t('ja-JP')}</SelectItem>
                <SelectItem value="ru-RU">{t('ru-RU')}</SelectItem>
                <SelectItem value="zh-CN">{t('zh-CN')}</SelectItem>
                <SelectItem value="ar-SA">{t('ar-SA')}</SelectItem>
            </SelectContent>
        </Select>
    )
}
