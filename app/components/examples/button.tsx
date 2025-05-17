import { Button } from '@/registry/basil-ui/ui/button'
import { ComponentCard } from '../component-card'

export default function ButtonExample() {
  return (
    <ComponentCard name="button" description="Button" examplePath="app/components/examples/button.tsx">
      <div className="flex flex-col gap-4">
        <Button>Click me</Button>
        <Button loading asChild>
          <a href="https://example.com">Loading...</a>
        </Button>
        <Button disabled>Disabled</Button>
        <Button variant="default">Default (Primary)</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    </ComponentCard>
  )
}
