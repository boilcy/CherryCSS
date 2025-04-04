import GradientText from '@/components/GradientText'
import { useTranslations } from 'next-intl'

export default function PageTitle() {
  const t = useTranslations()

  return (
    <header className="mt-8 mb-8 text-center">
      <GradientText
        colors={['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8b00ff']}
        animationSpeed={5}
        showBorder={false}
        className="mb-2 text-3xl font-bold md:text-4xl"
      >
        {t('home.title')}
      </GradientText>
      <p className="text-gray-600">{t('home.description')}</p>
    </header>
  )
}
