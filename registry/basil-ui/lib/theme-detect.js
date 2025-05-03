;(function () {
  //
  // This script detects the user's preferred color scheme and updates the theme accordingly.
  //
  // Example usage (in React Router app/root.tsx, or Next.js app/layout.tsx):
  // - Import the script as raw text: `import themeDetectJs from '@/lib/theme-detect.js?raw'`
  // - In the Layout component add `<script dangerouslySetInnerHTML={{ __html: themeDetectJs }} />` in the head
  //   before stylesheets and other scripts to avoid UI flashing
  // - In the Layout component add `suppressHydrationWarning` to the html tag to avoid hydration errors
  //
  function getPreferredColorScheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }

  function hasStoredTheme() {
    const localStorageTheme = localStorage.getItem('theme')
    return localStorageTheme !== null && localStorageTheme !== ''
  }

  function detectTheme() {
    const localStorageTheme = localStorage.getItem('theme')
    if (localStorageTheme) {
      return localStorageTheme === 'dark' ? 'dark' : 'light'
    }
    return getPreferredColorScheme()
  }

  if (detectTheme() === 'dark') {
    document.documentElement.classList.add('dark')
  }

  // when the theme is changed in local storage, update the theme
  window.addEventListener('storage', (event) => {
    if (event.key === 'theme') {
      if (event.newValue === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  })

  // when prefered color scheme changes, update the theme
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (hasStoredTheme()) {
      return
    }
    if (event.matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
})()
