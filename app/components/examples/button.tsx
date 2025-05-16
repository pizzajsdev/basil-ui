import { Button } from '@/registry/basil-ui/ui/button'

export default function ButtonExample() {
  return (
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
  )
}
