import { GithubIcon } from '@/registry/basil-ui/ui/social-icons'
import { Footer } from './footer'

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto flex flex-col min-h-svh p-4 gap-8 justify-between">
      <header className="flex flex-col items-center gap-9">
        <a
          href="https://github.com/pizzajsdev/basil-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-current absolute top-4 right-4"
        >
          <GithubIcon className="w-8 h-8" />
          <span className="sr-only">View on GitHub</span>
        </a>
        <h1 className="w-[500px] max-w-[100vw] p-4 flex flex-col items-center justify-center">
          <img src={'/basil-ui/logo.png'} alt="Basil UI" className="block w-full max-w-[100px] h-auto" />
          <span className="text-4xl font-bold">Basil UI</span>
        </h1>
      </header>
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  )
}
