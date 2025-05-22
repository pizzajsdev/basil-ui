import { cn } from '@/lib/utils'
import { Button } from '@/registry/basil-ui/ui/button'
import { Code2Icon } from 'lucide-react'
import { InstallButton } from './install-button'
import { OpenInV0Button } from './open-in-v0-button'

export function ComponentCard({
  name,
  description,
  children,
  openInV0,
  examplePath,
  className,
}: {
  name: string
  examplePath?: string
  description: string
  children: React.ReactNode
  openInV0?: boolean
  className?: string
}) {
  return (
    <div
      className={cn('flex flex-col gap-4 border rounded-lg p-4 pb-12 min-h-[250px] relative bg-surface-1', className)}
    >
      <div className="flex items-center justify-between gap-2 flex-row">
        <h3 className="text-sm text-muted-foreground sm:pl-3">{description}</h3>
        <div className="flex items-center gap-2">
          {openInV0 && <OpenInV0Button name={name} className="w-fit" />}
          {examplePath && (
            <Button variant="outline" size="sm" asChild className="text-inherit">
              <a
                href={`https://github.com/pizzajsdev/basil-ui/blob/main/${examplePath}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open example code"
                title="Open example"
              >
                <Code2Icon className="w-5 h-5" />
                <span className="sr-only">Open example</span>
              </a>
            </Button>
          )}
          <InstallButton name={name} />
        </div>
      </div>
      <div className="flex items-center justify-center min-h-[200px] relative">{children}</div>
    </div>
  )
}
