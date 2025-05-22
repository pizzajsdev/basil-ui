'use client'

import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { useId } from 'react'

export interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * Optional label for the checkbox
   */
  label?: string
  /**
   * Optional description text
   */
  description?: string
  /**
   * Optional error message
   */
  error?: string
}

export function Checkbox({ id, className, label, description, error, disabled, ...props }: CheckboxProps) {
  const inputId = id ?? useId()
  return (
    <div className="flex items-start gap-2">
      <div className="relative flex items-center">
        <input
          id={inputId}
          type="checkbox"
          className={cn(
            'appearance-none peer h-4 w-4 shrink-0 border border-input ring-offset-0',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
            className,
          )}
          disabled={disabled}
          {...props}
        />
        <Check
          className={cn(
            'absolute left-0 top-0 h-4 w-4 stroke-[2] text-primary-foreground opacity-0 transition-opacity',
            'peer-checked:opacity-100 pointer-events-none text-primary',
            'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
          )}
        />
      </div>
      {(label || description || error) && (
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={inputId}
              className={cn(
                'text-sm font-medium leading-none',
                disabled && 'cursor-not-allowed opacity-50',
                // error && 'text-destructive',
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <p className={cn('text-sm text-muted-foreground', disabled && 'cursor-not-allowed opacity-50')}>
              {description}
            </p>
          )}
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
      )}
    </div>
  )
}
