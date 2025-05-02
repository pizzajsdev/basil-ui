import { HeartIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex justify-center items-center py-4 text-sm">
      <p>
        Made with <HeartIcon className="w-4 h-4 inline-block text-primary" /> by{' '}
        <a href="https://github.com/itsjavi" className="underline" target="_blank" rel="noopener noreferrer">
          Javi Aguilar
        </a>{' '}
        as part of{' '}
        <a href="https://github.com/pizzajsdev" className="underline" target="_blank" rel="noopener noreferrer">
          PizzaJS
        </a>
      </p>
    </footer>
  )
}
