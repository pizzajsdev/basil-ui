import { Button } from '@/registry/basil-ui/ui/button'
import { Group } from '@/registry/basil-ui/ui/group'
import { Input } from '@/registry/basil-ui/ui/input'
import { ComponentCard } from '../component-card'

export default function InputExample() {
  return (
    <ComponentCard name="input" description="Input" examplePath="app/components/examples/input.tsx">
      <div className="flex flex-col gap-4 flex-1 p-2">
        <Input defaultValue="Default" />
        <Input disabled defaultValue="Disabled" />
        <Input placeholder="Placeholder" />
        <Input readOnly defaultValue="Read only" />
        <Group>
          <Input defaultValue="With a button" />
          <Button variant="outline">Button</Button>
        </Group>
      </div>
    </ComponentCard>
  )
}
