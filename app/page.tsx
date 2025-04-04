'use client'

import { PageLayout } from '@/components/layout'
import ThemeRenderGrid from '@/components/theme-render-grid'
import { themes } from '@/lib/themes'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'

// Number of themes to display initially
const INITIAL_VISIBLE_COUNT = 8

export default function RenderPage() {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)
  const [isLoading, setIsLoading] = useState(false)
  const loaderRef = useRef<HTMLDivElement>(null)
  const t = useTranslations()

  // Filter themes based on selected style
  const filteredThemes = themes.filter((theme) => {
    // If no style filter is selected, show all themes
    if (!selectedStyle) {
      return true
    }

    // Check theme style based on the style property
    return theme.style === selectedStyle
  })

  // Get the portion of themes to display
  const visibleThemes = filteredThemes.slice(0, Math.min(visibleCount, filteredThemes.length))

  // Setup intersection observer for infinite scrolling
  useEffect(() => {
    // Handle loading more themes
    const handleLoadMore = () => {
      if (isLoading || visibleCount >= filteredThemes.length) return

      setIsLoading(true)
      // Use setTimeout to simulate loading and prevent multiple rapid loads
      setTimeout(() => {
        setVisibleCount((prevCount) => prevCount + INITIAL_VISIBLE_COUNT)
        setIsLoading(false)
      }, 300)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          handleLoadMore()
        }
      },
      { rootMargin: '200px' } // Start loading before the user reaches the bottom
    )

    // Capture the current ref value
    const currentLoaderRef = loaderRef.current

    if (currentLoaderRef) {
      observer.observe(currentLoaderRef)
    }

    return () => {
      if (currentLoaderRef) {
        observer.unobserve(currentLoaderRef)
      }
    }
  }, [visibleCount, isLoading, filteredThemes.length])

  return (
    <PageLayout forwardLink={{ href: '/imgpre', textKey: 'to-image-preview' }}>
      <ThemeRenderGrid themes={visibleThemes} />

      {/* Infinite scroll loading indicator */}
      {visibleCount < filteredThemes.length && (
        <div ref={loaderRef} className="mt-8 mb-12 flex justify-center">
          {isLoading ? (
            <div className="animate-pulse rounded-md bg-gray-500 px-4 py-2 text-transparent">
              {t('render.loading')}
            </div>
          ) : (
            <div className="h-4" />
          )}
        </div>
      )}

      {selectedStyle && filteredThemes.length === 0 && (
        <div className="py-8 text-center">
          <p className="text-gray-500">No themes found with the selected filter.</p>
        </div>
      )}
    </PageLayout>
  )
}
