;(function () {
  //
  // This script detects the user's preferred color scheme and updates the theme accordingly.
  //
  // Example usage (in React Router root.tsx):
  //
  //  import themeDetectJs from '@/lib/theme-detect.js?raw'
  //  // in the Layout component add this in the head, before other scripts to avoid UI flashing:
  //  <script dangerouslySetInnerHTML={{ __html: themeDetectJs }} />
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
