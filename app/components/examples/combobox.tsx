import { Combobox, type ComboboxInputValueChangeDetails, createListCollection } from '@/registry/basil-ui/ui/combobox'
import { useState } from 'react'

const initialCollection = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Solid', value: 'solid' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte', disabled: true },
  ],
})

export default function ComboboxExamples() {
  const [collection, setCollection] = useState(initialCollection)

  const handleInputChange = ({ inputValue }: ComboboxInputValueChangeDetails) => {
    const filtered = initialCollection.items.filter((item) =>
      item.label.toLowerCase().includes(inputValue.toLowerCase()),
    )

    setCollection(filtered.length > 0 ? createListCollection({ items: filtered }) : initialCollection)
  }

  const handleOpenChange = () => {
    setCollection(initialCollection)
  }
  return (
    <Combobox.Root collection={collection} onInputValueChange={handleInputChange} onOpenChange={handleOpenChange}>
      {/* <Combobox.Label>Framework</Combobox.Label> */}
      <Combobox.Control>
        <Combobox.Input />
        <Combobox.DefaultTrigger>Open</Combobox.DefaultTrigger>
        {/* <Combobox.ClearTrigger /> */}
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          <Combobox.ItemGroup>
            <Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
            {collection.items.map((item) => (
              <Combobox.Item key={item.value} item={item}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
                <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </Combobox.ItemGroup>
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  )
}
