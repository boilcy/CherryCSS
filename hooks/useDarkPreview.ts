import { useCallback, useEffect, useState } from 'react'

// Create a global state to share across hook instances
let globalIsDarkPreview = false
const listeners = new Set<(isDark: boolean) => void>()

export function useDarkPreview() {
  const [isDarkPreview, setLocalIsDarkPreview] = useState<boolean>(globalIsDarkPreview)

  // Load the saved preference from localStorage on component mount
  useEffect(() => {
    const savedPreference = localStorage.getItem('darkPreview')
    if (savedPreference !== null) {
      const value = savedPreference === 'true'
      globalIsDarkPreview = value
      setLocalIsDarkPreview(value)
    }
  }, [])

  // Subscribe this component to updates
  useEffect(() => {
    const updateState = (isDark: boolean) => {
      setLocalIsDarkPreview(isDark)
    }

    listeners.add(updateState)

    return () => {
      listeners.delete(updateState)
    }
  }, [])

  // Update localStorage and notify all listeners when the preference changes
  const toggleDarkPreview = useCallback((value: boolean) => {
    globalIsDarkPreview = value
    localStorage.setItem('darkPreview', String(value))

    // Notify all components using this hook
    for (const listener of listeners) {
      listener(value)
    }
  }, [])

  return { isDarkPreview, toggleDarkPreview }
}
