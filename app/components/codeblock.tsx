'use client'

import { highlight } from '@/lib/highlighter'
import { useTheme } from '@/lib/use-theme'
import { cn } from '@/lib/utils'
import type { JSX } from 'react'
import { useLayoutEffect, useState } from 'react'
import type { BundledLanguage } from 'shiki/bundle/web'

export function CodeBlock({ code, lang }: { code: string; lang: BundledLanguage }) {
  const [nodes, setNodes] = useState<JSX.Element | null>(null)
  const theme = useTheme()

  useLayoutEffect(() => {
    void highlight(code, lang, theme).then(setNodes)
  }, [code, lang, theme])

  return (
    <div
      className={cn(
        'bg-muted rounded-md text-sm font-mono [&>pre]:contents max-w-full',
        'bg-background border-border/50 border p-4 text-xs',
        'max-h-[500px] overflow-y-auto',
      )}
    >
      {nodes ?? <pre>{code}</pre>}
    </div>
  )
}
