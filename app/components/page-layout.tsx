import { GithubIcon } from '@/registry/basil-ui/ui/social-icons'
import { ThemeToggle } from '@/registry/basil-ui/ui/theme-toggle'
import { Link } from 'react-router'
import { Footer } from './footer'

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-4xl mx-auto flex flex-col min-h-svh p-4 gap-8 justify-between">
      <header className="justify-between items-center gap-4 grid grid-cols-4">
        <div />{' '}
        <h1 className="contents">
          <Link to="/" className="p-4 flex flex-col sm:flex-row items-center justify-center gap-2 col-span-2">
            <img
              src={'/basil-ui/logo.png'}
              alt="Basil UI"
              width={64}
              height={64}
              className="block w-[64px] h-[64px] sm:w-[32px] sm:h-[32px]"
            />
            <span className="text-4xl font-bold text-foreground">Basil UI</span>
          </Link>
        </h1>
        <div className="flex self-start sm:self-center items-center justify-end gap-2">
          <a
            href="https://github.com/pizzajsdev/basil-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-current"
          >
            <GithubIcon className="w-8 h-8" />
            <span className="sr-only">View on GitHub</span>
          </a>
          <ThemeToggle />
        </div>
      </header>
      {children}
      <Footer />
    </main>
  )
}
