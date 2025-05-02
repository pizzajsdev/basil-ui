'use client'

import { cn } from '@/registry/basil-ui/lib/utils'
import { Button, type ButtonProps } from '@/registry/basil-ui/ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'

function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
}

export type ThemeTogglerProps = Omit<ButtonProps, 'onClick' | 'children' | 'asChild'>

export function ThemeToggle({ className, variant = 'outline', size = 'icon', ...props }: ThemeTogglerProps) {
  return (
    <Button variant={variant} size={size} onClick={toggleTheme} className={cn('rounded-full', className)} {...props}>
      <SunIcon className="w-4 h-4 hidden dark:block" />
      <MoonIcon className="w-4 h-4 dark:hidden" />
    </Button>
  )
}
