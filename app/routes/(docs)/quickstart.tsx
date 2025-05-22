import stylesCss from '@/basil.css?raw'
import { CodeBlock } from '@/components/codeblock'

export default function Page() {
  return (
    <article className="flex flex-col gap-6 [&_a]:text-primary">
      <div>
        <h1 className="text-3xl font-bold text-balance" id="quick-start">
          Quick Start
        </h1>
        <p className="text-lg text-muted-foreground">A quick guide to getting started with Basil&nbsp;UI.</p>
      </div>
      <p>
        This is the Basil UI component registry. You can install components locally using the{' '}
        <a href="https://ui.shadcn.com/docs/cli">shadcn CLI</a>, for example:
      </p>
      <code className="bg-muted p-2 rounded-md bg-surface-2 text-sm font-mono">
        npx -y shadcn@latest add https://pizzajs.dev/basil-ui/r/button.json
      </code>

      <p>You will also need to add the following CSS to your project:</p>
      <CodeBlock code={stylesCss} lang="css" />
    </article>
  )
}
