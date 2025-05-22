import { Radio } from '@/registry/basil-ui/ui/radio'
import { RadioGroup } from '@/registry/basil-ui/ui/radio-group'
import { ComponentCard } from '../component-card'

export default function RadioExample() {
  return (
    <ComponentCard
      name="radio-group"
      description="Radio and Radio Group"
      examplePath="app/components/examples/radio.tsx"
    >
      <div className="flex flex-col gap-8 flex-1 p-2">
        {/* Basic radio */}
        <Radio name="standalone" label="Standalone radio" value="standalone" />

        {/* Simple radio group */}
        <RadioGroup name="fruits" label="Select a fruit" defaultValue="apple">
          <Radio value="apple" label="Apple" />
          <Radio value="banana" label="Banana" />
          <Radio value="orange" label="Orange" />
        </RadioGroup>

        {/* Radio group with descriptions */}
        <RadioGroup
          name="notifications"
          label="Notification preferences"
          description="Select how you want to be notified"
          defaultValue="all"
        >
          <Radio value="all" label="All notifications" description="Receive notifications for all activity" />
          <Radio
            value="important"
            label="Important only"
            description="Only receive notifications for important updates"
          />
          <Radio value="none" label="No notifications" description="Turn off all notifications" />
        </RadioGroup>

        {/* Radio group with error */}
        <RadioGroup name="terms" label="Terms of Service" error="Please select one option to continue">
          <Radio value="accept" label="I accept" description="I have read and accept the terms of service" />
          <Radio value="decline" label="I decline" description="I do not accept the terms of service" />
        </RadioGroup>

        {/* Disabled radio group */}
        <RadioGroup
          name="disabled-group"
          label="Disabled group"
          description="This group cannot be interacted with"
          defaultValue="option1"
          disabled
        >
          <Radio value="option1" label="Option 1" />
          <Radio value="option2" label="Option 2" />
          <Radio value="option3" label="Option 3" />
        </RadioGroup>
      </div>
    </ComponentCard>
  )
}
