import { cn } from '@/registry/basil-ui/lib/utils'
import { Button } from '@/registry/basil-ui/ui/button'
import { Input as InputBase } from '@/registry/basil-ui/ui/input'
import { Portal } from '@ark-ui/react'
import { Combobox as ArkCombobox, type CollectionItem } from '@ark-ui/react/combobox'
import { ChevronDownIcon } from 'lucide-react'

function Root<T extends CollectionItem>({ className, ...props }: React.ComponentProps<typeof ArkCombobox.Root<T>>) {
  return <ArkCombobox.Root className={cn('flex flex-col gap-1.5 w-full', className)} {...props} />
}

function Control({ className, ...props }: React.ComponentProps<typeof ArkCombobox.Control>) {
  return <ArkCombobox.Control className={cn('relative', className)} {...props} />
}

function Label({ className, ...props }: React.ComponentProps<typeof ArkCombobox.Label>) {
  return <ArkCombobox.Label className={cn('font-medium text-sm', className)} {...props} />
}

function Trigger({ className, ...props }: React.ComponentProps<typeof ArkCombobox.Trigger>) {
  return (
    <ArkCombobox.Trigger
      className={cn('absolute bottom-0 top-0 right-1 text-muted-foreground', className)}
      {...props}
    />
  )
}

function DefaultTrigger({ className, ...props }: React.ComponentProps<typeof ArkCombobox.Trigger>) {
  return (
    <Trigger {...props} asChild>
      <Button variant="link" aria-label="open" size="icon" className="group z-2">
        <ChevronDownIcon className="group-data-[state=open]:rotate-180 transition-transform duration-200" />
      </Button>
    </Trigger>
  )
}

function Content({ className, ...props }: React.ComponentProps<typeof ArkCombobox.Content>) {
  return (
    <ArkCombobox.Content
      className={cn(
        'bg-surface-2 rounded-md dark:shadow-black/70 shadow-md',
        'flex flex-col z-high open:fade-in-25 closed:fade-out-25 p-1 gap-1',
        'focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-accent',
        className,
      )}
      {...props}
    />
  )
}

function Item({ className, ...props }: React.ComponentProps<typeof ArkCombobox.Item>) {
  return (
    <ArkCombobox.Item
      className={cn(
        'flex items-center justify-between cursor-pointer',
        'hover:bg-surface-3 highlighted:bg-surface-3 px-3 py-2',
        'disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}

function ItemGroupLabel({ className, ...props }: React.ComponentProps<typeof ArkCombobox.ItemGroupLabel>) {
  return <ArkCombobox.ItemGroupLabel className={cn('font-semibold text-sm px-2 py-1.5', className)} {...props} />
}

function ItemIndicator({ className, ...props }: React.ComponentProps<typeof ArkCombobox.ItemIndicator>) {
  return <ArkCombobox.ItemIndicator className={cn('text-foreground [&_:where(svg)]:size-4', className)} {...props} />
}

function ItemText({ className, ...props }: React.ComponentProps<typeof ArkCombobox.ItemText>) {
  return <ArkCombobox.ItemText className={cn('', className)} {...props} />
}

function ItemGroup({ className, ...props }: React.ComponentProps<typeof ArkCombobox.ItemGroup>) {
  return <ArkCombobox.ItemGroup className={cn('', className)} {...props} />
}

function Input({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <ArkCombobox.Input className={cn('', className)} {...props} asChild>
      <InputBase />
    </ArkCombobox.Input>
  )
}

function ClearTrigger({ className, ...props }: React.ComponentProps<typeof ArkCombobox.ClearTrigger>) {
  return <ArkCombobox.ClearTrigger className={cn('', className)} {...props} />
}

function Positioner({ className, ...props }: React.ComponentProps<typeof ArkCombobox.Positioner>) {
  return (
    <Portal>
      <ArkCombobox.Positioner className={cn('', className)} {...props} />
    </Portal>
  )
}

export const Combobox = {
  Root,
  Control,
  Label,
  Trigger,
  DefaultTrigger,
  Content,
  Item,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  ItemGroup,
  Input,
  ClearTrigger,
  Positioner,
}

export { ComboboxContext, createListCollection } from '@ark-ui/react/combobox'

export type {
  ComboboxHighlightChangeDetails,
  ComboboxInputValueChangeDetails,
  ComboboxOpenChangeDetails,
  ComboboxValueChangeDetails,
} from '@ark-ui/react/combobox'
