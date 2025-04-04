'use client'

import { PageLayout } from '@/components/layout'
import ThemeGrid from '@/components/theme-preview-grid'
import { themes } from '@/lib/themes'

export default function Home() {
  return (
    <PageLayout backLink={{ href: '/', textKey: 'to-renderer' }}>
      <ThemeGrid themes={themes} />
    </PageLayout>
  )
}
