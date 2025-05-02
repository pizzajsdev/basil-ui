import { ComponentsList } from '@/components/components-list'
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
  return <ComponentsList />
}
