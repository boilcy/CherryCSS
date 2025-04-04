import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { setUserLocale } from '@/hooks/locale'
import { Icon } from '@iconify/react'
import { useLocale, useTranslations } from 'next-intl'

export default function LocaleSelect() {
  const t = useTranslations('locale')
  const locale = useLocale()
  return (
    <Select onValueChange={setUserLocale} defaultValue={locale}>
      <Icon icon="mdi:language" className="h-6 w-6" />
      <SelectTrigger className="w-[120px]">
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
