import { Button } from '@/registry/basil-ui/ui/button'
import {
  BlueskyIcon,
  BuyMeACoffeeIcon,
  DeviantArtIcon,
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MastodonIcon,
  PatreonIcon,
  ThreadsIcon,
  TikTokIcon,
  TwitchIcon,
  TwitterIcon,
  XTwitterIcon,
  YoutubeIcon,
} from '@/registry/basil-ui/ui/social-icons'
import { ComponentCard } from './component-card'
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export function ComponentsList() {
  return (
    <div className="w-full flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Component Registry</h1>
        <p className="text-muted-foreground">
          This is the Basil UI component registry. You can edit a component directly using{' '}
          <span className="italic">v0.dev</span> or install it locally using the shadcn CLI.
        </p>
      </header>
      <div className="flex flex-col flex-1 gap-8">
        <ComponentCard name="button" description="Button">
          <Button>Click me</Button>
        </ComponentCard>
        <ComponentCard name="social-icons" description="Social Icons">
          <div className="flex flex-wrap gap-2">
            <BlueskyIcon />
            <MastodonIcon />
            <ThreadsIcon />
            <TwitterIcon />
            <XTwitterIcon />
            <DiscordIcon />
            <GithubIcon />
            <LinkedinIcon />
            <BuyMeACoffeeIcon />
            <DeviantArtIcon />
            <PatreonIcon />
            <InstagramIcon />
            <TikTokIcon />
            <TwitchIcon />
            <YoutubeIcon />
          </div>
        </ComponentCard>
      </div>
    </div>
  )
}
