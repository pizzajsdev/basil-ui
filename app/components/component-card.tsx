import { Button } from '@/registry/basil-ui/ui/button'
import { GithubIcon } from '@/registry/basil-ui/ui/social-icons'
import { InstallButton } from './install-button'
import { OpenInV0Button } from './open-in-v0-button'

export function ComponentCard({
  name,
  basePath = 'ui',
  description,
  children,
  openInV0,
}: {
  name: string
  basePath?: string
  description: string
  children: React.ReactNode
  openInV0?: boolean
}) {
  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[250px] relative">
      <div className="flex items-center justify-between gap-2 flex-row">
        <h3 className="text-sm text-muted-foreground sm:pl-3">{description}</h3>
        <div className="flex items-center gap-2">
          {openInV0 && <OpenInV0Button name={name} className="w-fit" />}
          <Button variant="outline" size="sm" asChild className="text-inherit">
            <a
              href={`https://github.com/pizzajsdev/basil-ui/blob/main/registry/basil-ui/${basePath}/${name}.tsx`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </Button>
          <InstallButton name={name} />
        </div>
      </div>
      <div className="flex items-center justify-center min-h-[200px] relative">{children}</div>
    </div>
  )
}
