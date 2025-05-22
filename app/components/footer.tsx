import { HeartIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex justify-center items-center mt-4 py-6 text-sm border-t border-border">
      <p>
        Made with <HeartIcon className="w-4 h-4 inline-block text-basil" /> by{' '}
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
