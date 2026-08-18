/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useDarkPreview } from '@/hooks/useDarkPreview'
import { scopeThemeCssForPreview } from '@/lib/cssTransformer'
import { Theme } from '@/lib/types'
import { useEffect, useMemo, useRef, useState } from 'react'
import { AppSidebar } from './app-sidebar'
import { ContentContainer } from './content-container'
import { Navbar } from './navbar'

// Width threshold below which sidebar should be collapsed
const SIDEBAR_COLLAPSE_THRESHOLD = 666
const SIDEBAR_COLLAPSE_DISABLE_THRESHOLD = 512

type PreviewDefaults = Record<`--${string}`, string>

// Partial overlay themes intentionally inherit any missing tokens from the host application.
// Provide valid v2-like host defaults here so the gallery models that contract instead of
// inheriting this site's legacy, space-separated HSL variables.
const V2_PREVIEW_DEFAULTS: Record<'light' | 'dark', PreviewDefaults> = {
  light: {
    '--background': '#ffffff',
    '--foreground': '#09090b',
    '--card': '#ffffff',
    '--card-foreground': '#09090b',
    '--primary': '#18181b',
    '--primary-foreground': '#fafafa',
    '--secondary': '#f4f4f5',
    '--secondary-foreground': '#18181b',
    '--muted': '#f4f4f5',
    '--muted-foreground': '#71717a',
    '--accent': '#f4f4f5',
    '--accent-foreground': '#18181b',
    '--border': '#e4e4e7',
    '--input': '#e4e4e7',
    '--sidebar': '#fafafa',
    '--sidebar-foreground': '#09090b',
    '--chat-user': '#f4f4f5',
  },
  dark: {
    '--background': '#09090b',
    '--foreground': '#fafafa',
    '--card': '#09090b',
    '--card-foreground': '#fafafa',
    '--primary': '#fafafa',
    '--primary-foreground': '#18181b',
    '--secondary': '#27272a',
    '--secondary-foreground': '#fafafa',
    '--muted': '#27272a',
    '--muted-foreground': '#a1a1aa',
    '--accent': '#27272a',
    '--accent-foreground': '#fafafa',
    '--border': '#27272a',
    '--input': '#27272a',
    '--sidebar': '#18181b',
    '--sidebar-foreground': '#fafafa',
    '--chat-user': '#27272a',
  },
}

interface ThemeRendererProps {
  theme: Theme
}

export default function ThemeRenderer({ theme }: ThemeRendererProps) {
  const uniqueWrapperClass = `wrapper-${theme.id}`
  const { isDarkPreview } = useDarkPreview()
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(isDarkPreview ? 'dark' : 'light')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const transformedCSS = useMemo(
    () => scopeThemeCssForPreview(theme.css, uniqueWrapperClass),
    [theme.css, uniqueWrapperClass]
  )
  const previewDefaultsCSS = useMemo(
    () =>
      (['light', 'dark'] as const)
        .map((mode) => {
          const declarations = Object.entries(V2_PREVIEW_DEFAULTS[mode])
            .map(([property, value]) => `  ${property}: ${value};`)
            .join('\n')
          return `.${uniqueWrapperClass}.${mode} {\n${declarations}\n}`
        })
        .join('\n\n'),
    [uniqueWrapperClass]
  )

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
      className={`${uniqueWrapperClass} ${themeMode} flex flex-row overflow-hidden rounded-lg border bg-[var(--background)] shadow-md`}
      data-ui="app.window"
      style={{
        borderColor: 'var(--border)',
        color: 'var(--foreground)',
        minHeight: '392px',
      }}
    >
      <style>{`${previewDefaultsCSS}\n\n${transformedCSS}`}</style>

      {/* App sidebar */}
      <AppSidebar themeMode={themeMode} setThemeMode={handleThemeToggle} />

      {/* Main container */}
      <div className="flex flex-1 flex-col">
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
