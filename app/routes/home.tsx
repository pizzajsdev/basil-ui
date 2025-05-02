import { ComponentsList } from '@/components/components-list'
import { ThemeEditor } from '@/components/theme-editor'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: 'Basil UI - A performant and accessible UI library for React and Tailwind CSS.',
    },
    {
      name: 'description',
      content:
        'A modern, a performant and accessible UI library for React and Tailwind CSS, ' +
        'compatible with shadcn/ui registry.',
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
