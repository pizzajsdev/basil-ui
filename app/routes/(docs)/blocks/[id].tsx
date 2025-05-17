import { blocksList } from '@/components/components-list'
import type { Route } from './+types/[id]'

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  const component = blocksList[params.id]
  if (!component) {
    throw new Response('Not Found', { status: 404 })
  }
  return component
}

export default function Page({ loaderData }: Route.ComponentProps) {
  const data = loaderData
  const Component = data.component
  return (
    <article className="flex-1 flex flex-col gap-6 [&_p_a]:text-primary">
      <div>
        <h1 className="text-3xl font-bold text-balance" id="quick-start">
          {data.label}
        </h1>
      </div>
      <Component />
    </article>
  )
}
