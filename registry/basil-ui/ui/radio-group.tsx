'use client'

import { cn } from '@/lib/utils'
import { Children, cloneElement, isValidElement, useCallback, useEffect, useId, useState } from 'react'
import { Radio } from './radio'

type RadioElement = React.ReactElement<React.ComponentProps<typeof Radio>>

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * The name attribute to be used for all radio inputs in the group
   */
  name: string
  /**
   * Optional label for the radio group
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
  /**
   * The currently selected value
   */
  value?: string
  /**
   * Callback when selection changes
   */
  onValueChange?: (value: string) => void
  /**
   * Whether the radio group is disabled
   */
  disabled?: boolean
  /**
   * Optional default value
   */
  defaultValue?: string
  children: RadioElement[] | RadioElement
}

export function RadioGroup({
  className,
  children,
  name,
  label,
  description,
  error,
  value,
  defaultValue,
  onValueChange,
  disabled,
  ...props
}: RadioGroupProps) {
  const id = useId()
  const [selectedValue, setSelectedValue] = useState(value ?? defaultValue)

  // Update internal state when controlled value changes
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value
      setSelectedValue(newValue)
      onValueChange?.(newValue)
    },
    [onValueChange],
  )

  // Clone children and inject necessary props
  const radioButtons = Children.map(children, (child) => {
    if (!isValidElement(child)) return child

    // Ensure the child is a Radio component
    const radioChild = child
    if (!radioChild) return child

    return cloneElement(radioChild, {
      name,
      checked: radioChild.props.value === selectedValue,
      onChange: handleChange,
      disabled: disabled || radioChild.props.disabled,
    })
  })

  return (
    <div role="radiogroup" aria-labelledby={label ? id : undefined} className={cn('grid gap-4', className)} {...props}>
      {(label || description || error) && (
        <div className="grid gap-1">
          {label && (
            <label
              id={id}
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
      <div className="grid gap-2">{radioButtons}</div>
    </div>
  )
}
