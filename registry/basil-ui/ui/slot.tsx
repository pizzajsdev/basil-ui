import { cn } from '@/registry/basil-ui/lib/utils'
import { cloneElement, isValidElement } from 'react'

type SlotProps = {
  children?: React.ReactNode
} & Record<string, any>

export function Slot({ children, className, ...restProps }: SlotProps): React.ReactElement {
  if (!isValidElement(children)) {
    throw new Error('<Slot> must have a single valid React element as a child.')
  }

  const childrenProps = { ...(children.props as Record<string, unknown>) }
  const combinedClassNames = cn(className, childrenProps['className'] || '').trim()
  if (combinedClassNames) {
    childrenProps['className'] = combinedClassNames
  }

  return cloneElement(children, {
    ...restProps,
    ...childrenProps,
  })
}
