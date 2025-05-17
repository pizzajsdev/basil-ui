import { Input } from '@/registry/basil-ui/ui/input'
import { ComponentCard } from '../component-card'

export default function InputExample() {
  return (
    <ComponentCard name="input" description="Input" examplePath="app/components/examples/input.tsx">
      <div className="flex flex-col gap-4">
        <Input defaultValue="Default" />
        <Input disabled defaultValue="Disabled" />
        <Input placeholder="Placeholder" />
        <Input readOnly defaultValue="Read only" />
      </div>
    </ComponentCard>
  )
}
