import { Button } from '@/registry/basil-ui/ui/button'
import { ComponentCard } from '../component-card'

export default function ButtonExample() {
  return (
    <ComponentCard name="button" description="Button" examplePath="app/components/examples/button.tsx">
      <div className="grid sm:grid-cols-2 gap-4">
        <Button className="col-span-full">Default</Button>
        <Button loading asChild>
          <a href="https://example.com">Loading...</a>
        </Button>
        <Button disabled>Disabled</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </ComponentCard>
  )
}
