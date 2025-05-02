import { InstallButton } from './install-button'
import { OpenInV0Button } from './open-in-v0-button'

export function ComponentCard({
  name,
  description,
  children,
}: {
  name: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[250px] relative">
      <div className="flex items-center justify-between flex-col gap-4 sm:gap-2 sm:flex-row">
        <h2 className="text-sm text-muted-foreground sm:pl-3">{description}</h2>
        <div className="flex items-center gap-2">
          <OpenInV0Button name={name} className="w-fit" />
          <InstallButton name={name} />
        </div>
      </div>
      <div className="flex items-center justify-center min-h-[200px] relative">{children}</div>
    </div>
  )
}
