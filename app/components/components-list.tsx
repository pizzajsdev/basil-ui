import { Button } from '@/registry/basil-ui/ui/button'
import { ThemeToggle } from '@/registry/basil-ui/ui/theme-toggle'
import { ComponentCard } from './component-card'
import { SocialIcons } from './examples/social-icons'
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export function ComponentsList() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:[&>div]:last:odd:col-span-2">
      <ComponentCard name="button" description="Button">
        <Button>Click me</Button>
      </ComponentCard>
      <ComponentCard name="theme-toggle" description="Theme Toggle">
        <ThemeToggle />
      </ComponentCard>
      <ComponentCard name="social-icons" description="Social Icons">
        <SocialIcons />
      </ComponentCard>
    </div>
  )
}
