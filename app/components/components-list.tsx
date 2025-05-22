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
  // base primitives:
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
  checkbox: {
    id: 'checkbox',
    label: 'Checkbox',
    component: lazy(() => import('./examples/checkbox')),
  },
  radio: {
    id: 'radio',
    label: 'Radio',
    component: lazy(() => import('./examples/radio')),
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
  // more complex:
  'code-block': {
    id: 'code-block',
    label: 'Code Block',
    component: lazy(() => import('./coming-soon')),
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
}

export const blocksList: ComponentHash = {
  'toggle-group': {
    id: 'toggle-group',
    label: 'Toggle Group',
    component: lazy(() => import('./examples/toggle-group')),
  },
}
