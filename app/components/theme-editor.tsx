import { Button } from '@/registry/basil-ui/ui/button'
import { XIcon } from 'lucide-react'
import { useState } from 'react'

export function ThemeEditor() {
  // when inputs change, we should update the css variables of the root, e.g.:
  // --primary: #47C488;
  // --radius: 0.625rem;

  const [open, setOpen] = useState(false)
  const [primary, setPrimary] = useState('#47C488')
  const [radius, setRadius] = useState(0.625)
  const cssCode = `:root {
  --primary: ${primary};
  --radius: ${radius}rem;
}
.dark {
  --primary: ${primary};
  --radius: ${radius}rem;
}`

  if (!open) {
    return (
      <div>
        <style>{cssCode}</style>
        <Button size="sm" variant="outline" className="w-fit" onClick={() => setOpen(true)}>
          <span>Open Theme Editor</span>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4">
      <style>{cssCode}</style>
      <Button
        size="icon"
        variant="outline"
        className="size-8 absolute top-2 right-2 z-10"
        onClick={() => setOpen(false)}
      >
        <XIcon className="w-4 h-4" />
      </Button>
      <h2 className="text-lg font-medium">Theme Editor</h2>
      <pre
        className="text-xs border p-4 bg-black/5 dark:bg-white/5 rounded-sm"
        onClick={(e) => {
          const selection = window.getSelection()
          if (selection) {
            selection.removeAllRanges()
            const range = document.createRange()
            range.selectNodeContents(e.currentTarget)
            selection.addRange(range)
            // selection.collapseToEnd()
          }
        }}
      >
        {cssCode}
      </pre>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">Primary Color</h3>
          <input type="color" defaultValue="#47C488" value={primary} onChange={(e) => setPrimary(e.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">Base Radius</h3>
          <input
            type="range"
            min="0"
            max="5"
            step="0.05"
            defaultValue="0.625"
            onChange={(e) => setRadius(Number(e.target.value))}
            style={{ accentColor: primary }}
          />
        </div>
      </div>
    </div>
  )
}
