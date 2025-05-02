import { InstallButton } from './install-button'
import { OpenInV0Button } from './open-in-v0-button'

export function ComponentCard({
  name,
  description,
  children,
  openInV0,
}: {
  name: string
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
          <InstallButton name={name} />
        </div>
      </div>
      <div className="flex items-center justify-center min-h-[200px] relative">{children}</div>
    </div>
  )
}
