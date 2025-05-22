import { Checkbox } from '@/registry/basil-ui/ui/checkbox'
import { ComponentCard } from '../component-card'

export default function CheckboxExample() {
  return (
    <ComponentCard name="checkbox" description="Checkbox" examplePath="app/components/examples/checkbox.tsx">
      <div className="flex flex-col gap-6 flex-1 p-2">
        {/* Basic checkbox */}
        <Checkbox label="Basic checkbox" />

        {/* Checkbox with description */}
        <Checkbox label="Newsletter subscription" description="Receive updates about new features and announcements" />

        {/* Disabled checkbox */}
        <Checkbox
          label="Disabled checkbox"
          description="This checkbox cannot be interacted with"
          disabled
          defaultChecked
        />

        {/* Checkbox with error */}
        <Checkbox label="Accept terms and conditions" error="You must accept the terms to continue" />

        {/* Checkbox that starts checked */}
        <Checkbox label="Pre-checked option" defaultChecked />
      </div>
    </ComponentCard>
  )
}
