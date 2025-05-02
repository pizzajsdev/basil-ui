import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import type { Route } from './+types/root'

import { Footer } from './components/footer'
import themeDetectJs from './theme-detect.js?raw'

import { GithubIcon } from '@/registry/basil-ui/ui/social-icons'
import './app.css'

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    rel: 'icon',
    href: '/favicon.png',
    type: 'image/png',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{ __html: themeDetectJs }} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
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
        <div className="w-[500px] max-w-[100vw] p-4 flex flex-col items-center justify-center">
          <img src={'/logo.png'} alt="Basil UI" className="block w-full max-w-[100px] h-auto" />
          <span className="text-4xl font-bold">Basil UI</span>
        </div>
      </header>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
