import { cn } from '@/registry/basil-ui/lib/utils'
import type { ComponentPropsWithRef } from 'react'

export const groupClasses = cn(
  'flex flex-row gap-0 items-center',
  '[&>*:not(:last-child)]:rounded-r-none',
  '[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0',
  '[&>*:not(:last-child)_[data-scope=combobox]]:rounded-r-none',
  '[&>*:not(:first-child)_[data-scope=combobox]]:rounded-l-none [&>*:not(:first-child)_[data-scope=combobox]]:border-l-0',
)

export function Group({ children, className, ...props }: ComponentPropsWithRef<'div'>) {
  return (
    <div className={cn(groupClasses, className)} {...props}>
      {children}
    </div>
  )
}
