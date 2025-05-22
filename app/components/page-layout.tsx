import { GithubIcon } from '@/registry/basil-ui/ui/social-icons'
import { ThemeToggle } from '@/registry/basil-ui/ui/theme-toggle'
import { Link } from 'react-router'
import { Footer } from './footer'
import { Logo } from './logo'

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-svh gap-4 justify-between">
      <header className="flex justify-between items-center border-b border-border p-3">
        <h1 className="contents">
          <Link to="/" className="flex flex-row items-center justify-center gap-2">
            <Logo
              width={64}
              height={64}
              className="block w-[28px] h-[28px]"
              pathClassName="fill-none stroke-[30px] stroke-current"
            />
            <span className="text-xl font-bold text-foreground">Basil UI</span>
          </Link>
        </h1>
        <div className="flex items-center gap-2">
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
    </div>
  )
}
