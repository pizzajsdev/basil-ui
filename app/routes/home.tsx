import { ComponentsList } from '@/components/components-list'
import { ThemeEditor } from '@/components/theme-editor'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: 'Basil UI - A modern UI library for React focused on accessibility and performance.',
    },
    {
      name: 'description',
      content:
        'A modern UI library for React focused on accessibility and performance, compatible with shadcn/ui registry,' +
        ' and built on top of modern primitives such as Ark UI, Base UI, and TanStack Virtual.',
    },
  ]
}

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold tracking-tight">Component Registry</h2>
        <p className="text-muted-foreground">
          This is the Basil UI component registry. You can install components locally using the shadcn CLI.
        </p>
      </header>
      <div className="flex flex-col gap-4">
        <ThemeEditor />
        <ComponentsList />
      </div>
    </div>
  )
}
