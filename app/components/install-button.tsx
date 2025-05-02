import { getBaseUrl } from '@/lib/env'
import { cn } from '@/lib/utils'
import { Button } from '@/registry/basil-ui/ui/button'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useState } from 'react'

export function InstallButton({ name }: { name: string }) {
  const baseUrl = getBaseUrl()
  const installCode = `npx -y shadcn@latest add ${baseUrl}/r/${name}.json`
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(installCode)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }
  return (
    <Button
      size="sm"
      variant="outline"
      onClick={handleCopy}
      title="Copy installation code"
      aria-label="Copy installation code"
      className={cn('text-xs gap-2 inline-flex items-center', copied && 'animate-pulse')}
    >
      {copied ? <CheckIcon className="w-4 h-4 text-primary" /> : <CopyIcon className="w-4 h-4" />}
    </Button>
  )
}
