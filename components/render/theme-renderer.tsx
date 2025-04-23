/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useDarkPreview } from '@/hooks/useDarkPreview'
import { prefixThemeCSS } from '@/lib/cssTransformer'
import { Theme } from '@/lib/types'
import { useEffect, useRef, useState } from 'react'
import { AppSidebar } from './app-sidebar'
import { ContentContainer } from './content-container'
import { Navbar } from './navbar'

// Width threshold below which sidebar should be collapsed
const SIDEBAR_COLLAPSE_THRESHOLD = 666
const SIDEBAR_COLLAPSE_DISABLE_THRESHOLD = 512

interface ThemeRendererProps {
  theme: Theme
  originThemeClassName: string
}

export default function ThemeRenderer({ theme, originThemeClassName }: ThemeRendererProps) {
  const uniqueWrapperClass = `wrapper-${theme.id}`
  const { isDarkPreview } = useDarkPreview()
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(isDarkPreview ? 'dark' : 'light')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [transformedCSS, setTransformedCSS] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  // Transform CSS to use wrapper class instead of global selectors
  useEffect(() => {
    const css = prefixThemeCSS(theme.id, theme.css, uniqueWrapperClass)
    if (theme.id == 'chang-an') {
      console.log(css)
    }
    setTransformedCSS(css)
  }, [theme.css, uniqueWrapperClass])

  // Always sync with global theme preference
  useEffect(() => {
    setThemeMode(isDarkPreview ? 'dark' : 'light')
  }, [isDarkPreview])

  // Set up resize observer to track container width
  useEffect(() => {
    if (!containerRef.current) return

    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width || 0
      setContainerWidth(width)
    })

    resizeObserver.observe(containerRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  // Auto-collapse sidebar based on width threshold crossing
  useEffect(() => {
    if (containerWidth > 0) {
      const prevWidth = containerRef.current?.dataset.prevWidth
        ? Number(containerRef.current.dataset.prevWidth)
        : containerWidth

      // Only update when crossing the threshold
      if (
        (prevWidth >= SIDEBAR_COLLAPSE_THRESHOLD && containerWidth < SIDEBAR_COLLAPSE_THRESHOLD) ||
        (prevWidth < SIDEBAR_COLLAPSE_THRESHOLD && containerWidth >= SIDEBAR_COLLAPSE_THRESHOLD)
      ) {
        setSidebarCollapsed(containerWidth < SIDEBAR_COLLAPSE_THRESHOLD)
      }

      // Store current width for next comparison
      if (containerRef.current) {
        containerRef.current.dataset.prevWidth = String(containerWidth)
      }
    }
  }, [containerWidth])

  // Local theme toggle function that only affects this renderer
  // until the next global theme change
  const handleThemeToggle = (mode: 'light' | 'dark') => {
    setThemeMode(mode)
  }

  // Handle sidebar toggle with width check
  const handleSidebarToggle = (collapsed: boolean) => {
    // If expanding and width is too small, don't allow
    if (!collapsed && containerWidth < SIDEBAR_COLLAPSE_DISABLE_THRESHOLD) {
      return
    }
    setSidebarCollapsed(collapsed)
  }

  return (
    <div
      ref={containerRef}
      className={`${uniqueWrapperClass} ${originThemeClassName} flex flex-row overflow-hidden rounded-lg border bg-[var(--navbar-background)] shadow-md`}
      theme-mode={themeMode}
      style={{
        color: 'var(--color-text)',
        minHeight: '392px',
      }}
    >
      <style jsx>{`
        ${transformedCSS}
      `}</style>

      {/* App sidebar */}
      <AppSidebar themeMode={themeMode} setThemeMode={handleThemeToggle} />

      {/* Main container */}
      <div id="home-page" className="flex flex-1 flex-col">
        {/* App Navbar */}
        <Navbar
          theme={theme}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={handleSidebarToggle}
        />

        {/* Content Container */}
        <ContentContainer sidebarCollapsed={sidebarCollapsed} />
      </div>
    </div>
  )
}
