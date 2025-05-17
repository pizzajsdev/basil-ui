import { cn } from '@/lib/utils'
import { href, Link, useLocation } from 'react-router'
import { blocksList, componentsList } from './components-list'

export const menuItems: Array<{
  id: string
  groupName: string
  items: Array<{
    id: string
    label: string
    href: string
  }>
}> = [
  {
    id: 'overview',
    groupName: 'Overview',
    items: [{ id: 'quickstart', label: 'Quick Start', href: href('/quickstart') }],
  },
  {
    id: 'components',
    groupName: 'Components',
    items: Object.entries(componentsList).map(([id, { label }]) => ({
      id,
      label,
      href: href('/components/:id', { id }),
    })),
  },
  // blocks
  {
    id: 'blocks',
    groupName: 'Blocks',
    items: Object.entries(blocksList).map(([id, { label }]) => ({
      id,
      label,
      href: href('/blocks/:id', { id }),
    })),
  },
]

export function SidebarMenu() {
  const location = useLocation()
  const currentPath = location.pathname
  return (
    <div className="flex flex-col gap-2 w-[250px] px-4 text-sm">
      {menuItems.map((group) => (
        <div key={group.groupName} className="flex flex-col gap-1 mb-4">
          <div>{group.groupName}</div>
          <ul className="flex flex-col gap-1">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    'px-2 py-1 rounded-md block hover:bg-surface-1 transition-colors border border-transparent',
                    'font-normal',
                    currentPath === item.href && 'border border-surface-3 bg-surface-1',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
