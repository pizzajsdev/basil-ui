import { useLayoutEffect, useState } from 'react'
import { onClassChange } from './dom'

function getRootTheme() {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(getRootTheme())

  useLayoutEffect(() => {
    const mutationObserver = onClassChange(document.documentElement, () => {
      setTheme(getRootTheme())
    })

    return () => mutationObserver.disconnect()
  }, [])

  return theme
}
