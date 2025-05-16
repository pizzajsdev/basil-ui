import { Button } from '@/registry/basil-ui/ui/button'
import { Group } from '@/registry/basil-ui/ui/group'
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon, BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'
import { useState } from 'react'

export function ToggleGroup({
  onToggle,
  ...props
}: { onToggle?: (value: string) => void } & React.ComponentProps<typeof Group>) {
  const [value, setValue] = useState<string | null>(null)
  const handleToggle = (value: string) => {
    setValue(value)
    onToggle?.(value)
  }
  return (
    <Group {...props}>
      <Button variant="outline" pressed={value === 'left'} onClick={() => handleToggle('left')}>
        <AlignLeftIcon className="w-4 h-4" />
      </Button>
      <Button variant="outline" pressed={value === 'center'} onClick={() => handleToggle('center')}>
        <AlignCenterIcon className="w-4 h-4" />
      </Button>
      <Button variant="outline" pressed={value === 'right'} onClick={() => handleToggle('right')}>
        <AlignRightIcon className="w-4 h-4" />
      </Button>
    </Group>
  )
}

export function ToggleGroupMulti({
  onToggle,
  ...props
}: { onToggle?: (value: Record<string, boolean | undefined>) => void } & React.ComponentProps<typeof Group>) {
  const [value, setValue] = useState<Record<string, boolean | undefined>>({})
  const handleToggle = (key: string) => {
    setValue({ ...value, [key]: !value[key] })
    onToggle?.(value)
  }
  return (
    <Group {...props}>
      <Button variant="outline" pressed={value['bold']} onClick={() => handleToggle('bold')}>
        <BoldIcon className="w-4 h-4" />
      </Button>
      <Button variant="outline" pressed={value['italic']} onClick={() => handleToggle('italic')}>
        <ItalicIcon className="w-4 h-4" />
      </Button>
      <Button variant="outline" pressed={value['underline']} onClick={() => handleToggle('underline')}>
        <UnderlineIcon className="w-4 h-4" />
      </Button>
    </Group>
  )
}
