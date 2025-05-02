import { HelloWorld } from '@/registry/basil-ui/blocks/hello-world'
import { Button } from '@/registry/basil-ui/ui/button'
import { ComponentCard } from './component-card'
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export function ComponentsList() {
  return (
    <div className="w-full flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Component Registry</h1>
        <p className="text-muted-foreground">A custom registry for distributing code using the shadcn CLI.</p>
      </header>
      <div className="flex flex-col flex-1 gap-8">
        <ComponentCard name="hello-world" description="A simple hello world block component">
          <HelloWorld />
        </ComponentCard>
        <ComponentCard name="button" description="Button">
          <Button>Click me</Button>
        </ComponentCard>
      </div>
    </div>
  )
}
