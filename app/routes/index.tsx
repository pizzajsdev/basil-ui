import { Button } from '@/registry/basil-ui/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router'
import type { Route } from './+types/index'

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

export default function Page() {
  return (
    <main className="flex flex-col p-4 gap-8 justify-between items-center">
      <div className="w-full flex flex-col gap-4 justify-start max-w-[25rem] mx-auto text-pretty">
        <Link to="/" className="flex flex-row items-center justify-center gap-2">
          <img src={'/basil-ui/logo.png'} alt="Basil UI" width={64} height={64} className="block w-[64px] h-[64px]" />
        </Link>
        <h2 className="text-xl font-bold tracking-tight">
          Essential UI components, Blocks and Utilities for building accessible web apps and design systems with React.
        </h2>
        <p className="text-muted-foreground">
          Focused on performance and developer experience, the components are interoperable, highly reusable, and much
          more stylable than in other libraries. Inspired by shadcn UI, Ark UI, Park UI, and Base UI.
        </p>
        <p className="text-muted-foreground">TailwindCSS v4+ and React 19+ ready.</p>
        <Button asChild size="lg" variant="outline" className="self-start">
          <Link to="/quickstart">
            Documentation <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </main>
  )
}
