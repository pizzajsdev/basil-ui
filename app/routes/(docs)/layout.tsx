import { SidebarMenu } from '@/components/sidebar-menu'
import { Outlet } from 'react-router'
import type { Route } from './+types/layout'

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

export default function Layout() {
  return (
    <main className="flex flex-col px-4 gap-2 flex-1">
      <div className="flex flex-row gap-12">
        <SidebarMenu />
        <Outlet />
      </div>
    </main>
  )
}
