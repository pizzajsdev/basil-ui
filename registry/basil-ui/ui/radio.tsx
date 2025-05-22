'use client'

import { cn } from '@/lib/utils'
import { Circle } from 'lucide-react'
import * as React from 'react'

export interface RadioProps extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * Optional label for the radio
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

export function Radio({ className, label, description, error, disabled, ...props }: RadioProps) {
  const id = React.useId()

  return (
    <div className="flex items-start gap-2">
      <div className="relative flex items-center">
        <input
          id={id}
          type="radio"
          className={cn(
            'peer h-4 w-4 shrink-0 rounded-full border border-input ring-offset-background appearance-none',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'data-[state=checked]:border-primary',
            className,
          )}
          disabled={disabled}
          {...props}
        />
        <Circle
          className={cn(
            'absolute left-0 top-0 h-4 w-4 scale-0 text-primary fill-primary stroke-none opacity-0 transition-all',
            'peer-checked:scale-75 peer-checked:opacity-100',
            'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
          )}
        />
      </div>
      {(label || description || error) && (
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={id}
              className={cn(
                'text-sm font-medium leading-none',
                disabled && 'cursor-not-allowed opacity-50',
                error && 'text-destructive',
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
