import { useTranslations } from 'next-intl'

export default function PageTitle() {
  const t = useTranslations()

  return (
    <header className="mt-8 mb-8 text-center">
      <h1 className="static-gradient-text mb-2 text-3xl font-bold md:text-4xl">
        {t('home.title')}
      </h1>
      <p className="text-gray-600">{t('home.description')}</p>
      <style jsx>{`
        .static-gradient-text {
          background: linear-gradient(
            to right,
            #ff0000,
            #ff7f00,
            #ffff00,
            #00ff00,
            #0000ff,
            #4b0082,
            #8b00ff
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }
      `}</style>
    </header>
  )
}
