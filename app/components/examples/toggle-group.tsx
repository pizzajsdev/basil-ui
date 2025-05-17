import { ToggleGroup, ToggleGroupMulti } from '@/registry/basil-ui/blocks/toggle-group'
import { ComponentCard } from '../component-card'

export default function ToggleGroupExample() {
  return (
    <ComponentCard
      name="toggle-group"
      description="Toggle Group"
      examplePath="app/components/examples/toggle-group.tsx"
    >
      <div className="flex flex-col gap-4">
        <ToggleGroup />
        <ToggleGroupMulti />
      </div>
    </ComponentCard>
  )
}
