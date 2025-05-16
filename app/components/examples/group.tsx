import { Button } from '@/registry/basil-ui/ui/button'
import { Group } from '@/registry/basil-ui/ui/group'
import ComboboxExamples from './combobox'

export default function GroupExample() {
  return (
    <div className="flex flex-col gap-4">
      <Group>
        <Button>Click me</Button>
        <ComboboxExamples />
        <Button>Click me</Button>
      </Group>
    </div>
  )
}
