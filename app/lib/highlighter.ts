import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import type { JSX } from 'react'
import { Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import type { BundledLanguage } from 'shiki/bundle/web'
import { codeToHast } from 'shiki/bundle/web'

export async function highlight(code: string, lang: BundledLanguage, theme: 'light' | 'dark' = 'light') {
  const out = await codeToHast(code, {
    lang,
    theme: theme === 'light' ? 'github-light' : 'github-dark',
  })

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
  }) as JSX.Element
}
