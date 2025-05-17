import { lazy, type LazyExoticComponent } from 'react'

export type ComponentHash = Record<
  string,
  {
    id: string
    label: string
    component: LazyExoticComponent<() => React.ReactNode>
  }
>

export const componentsList: ComponentHash = {
  button: {
    id: 'button',
    label: 'Button',
    component: lazy(() => import('./examples/button')),
  },
  input: {
    id: 'input',
    label: 'Input',
    component: lazy(() => import('./examples/input')),
  },
  combobox: {
    id: 'combobox',
    label: 'Combobox',
    component: lazy(() => import('./examples/combobox')),
  },
  group: {
    id: 'group',
    label: 'Group',
    component: lazy(() => import('./examples/group')),
  },
  'theme-toggle': {
    id: 'theme-toggle',
    label: 'Theme Toggle',
    component: lazy(() => import('./examples/theme-toggle')),
  },
  'social-icons': {
    id: 'social-icons',
    label: 'Social Icons',
    component: lazy(() => import('./examples/social-icons')),
  },
  'code-snippet': {
    id: 'code-snippet',
    label: 'Code Snippet',
    component: lazy(() => import('./coming-soon')),
  },
}

export const blocksList: ComponentHash = {
  'toggle-group': {
    id: 'toggle-group',
    label: 'Toggle Group',
    component: lazy(() => import('./examples/toggle-group')),
  },
}
