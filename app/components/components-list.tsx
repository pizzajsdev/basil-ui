import { ThemeToggle } from '@/registry/basil-ui/ui/theme-toggle'
import { ComponentCard } from './component-card'
import ButtonExample from './examples/button'
import ComboboxExamples from './examples/combobox'
import SocialIconsExample from './examples/social-icons'
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export function ComponentsList() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:[&>div]:last:odd:col-span-2">
      <ComponentCard name="button" description="Button" examplePath="app/components/examples/button.tsx">
        <ButtonExample />
      </ComponentCard>
      <ComponentCard name="theme-toggle" description="Theme Toggle" examplePath="registry/basil-ui/ui/theme-toggle.tsx">
        <ThemeToggle />
      </ComponentCard>
      <ComponentCard
        name="social-icons"
        description="Social Icons"
        examplePath="app/components/examples/social-icons.tsx"
      >
        <SocialIconsExample />
      </ComponentCard>
      <ComponentCard name="combobox" description="Combobox" examplePath="app/components/examples/combobox.tsx">
        <ComboboxExamples />
      </ComponentCard>
    </div>
  )
}
