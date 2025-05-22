import { cn } from '@/registry/basil-ui/lib/utils'
import { isSingleChild, Slot } from '@/registry/basil-ui/ui/slot'
import { SpinnerIcon } from '@/registry/basil-ui/ui/spinner-icon'
import { cva, type VariantProps } from 'class-variance-authority'
import { cloneElement, type ReactNode } from 'react'

export const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm',
    'font-medium transition-all disabled:pointer-events-none disabled:opacity-50',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0",
    '[&_svg]:shrink-0 outline-none',
    // todo: move ring / focus into a reusable variable so it can be used in other components
    'focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:z-1',
    'focus-visible:ring-[1px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
    'aria-invalid:border-destructive',
  ),
  {
    variants: {
      variant: {
        default: 'bg-foreground-1 text-surface-1 shadow-xs hover:bg-foreground-1/90 border border-foreground-1',
        // inverted: 'bg-surface-0 text-foreground-0 shadow-xs hover:bg-surface-2 border border-surface-0',
        primary: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 border-primary border',
        accent: 'bg-accent text-accent-foreground shadow-xs hover:bg-accent/90 border-accent border',
        destructive:
          'bg-destructive dark:bg-destructive-strong text-white shadow-xs hover:bg-destructive/90' +
          'focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline:
          'border bg-transparent shadow-xs border-input hover:bg-input/50 pressed:bg-white/90 dark:pressed:bg-black/40',
        ghost: 'hover:bg-input/50 hover:text-foreground dark:hover:bg-input/30',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
    pressed?: boolean
  }

export function Button({
  className,
  children,
  variant,
  size,
  asChild = false,
  loading = false,
  pressed = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  const childrenProps = (children as any)?.props || {}
  let childrenWithSpinner: ReactNode = children

  const pressedProps = pressed ? { 'data-state': 'pressed', 'aria-pressed': true } : {}

  if (loading) {
    if (isSingleChild(children)) {
      childrenWithSpinner = cloneElement<any>(children, {
        className: cn(childrenProps?.className),
        children: (
          <>
            <SpinnerIcon data-loading-icon />
            {childrenProps?.children}
          </>
        ),
      })
    } else {
      childrenWithSpinner = (
        <>
          <SpinnerIcon data-loading-icon />
          {children}
        </>
      )
    }
  }

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }), {
        'pointer-events-none animate-pulse': loading,
      })}
      data-loading={loading === true ? true : undefined}
      aria-busy={loading === true ? true : undefined}
      {...props}
      {...pressedProps}
    >
      {childrenWithSpinner}
    </Comp>
  )
}
