import { cn } from '@/registry/basil-ui/lib/utils'

export const inputClasses = cn(
  'flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base',
  'ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium',
  'file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none',
  'focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:z-1',
  'disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
)

export function Input({ className, ...props }: React.ComponentProps<'input'>) {
  return <input className={cn(inputClasses, className)} {...props} />
}
