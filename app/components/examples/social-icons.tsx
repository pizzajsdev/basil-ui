import { cn } from '@/lib/utils'
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
import { ComponentCard } from '../component-card'

export default function SocialIconsExample() {
  return (
    <ComponentCard
      name="social-icons"
      description="Social Icons"
      examplePath="app/components/examples/social-icons.tsx"
    >
      <div
        className={cn(
          'flex items-center justify-center flex-wrap transition-all',
          '[&>*]:size-8 [&>*]:px-1 [&>*]:transition-all [&>*]:duration-250',
          '[&>*:hover]:size-14 [&>*:hover+*]:size-10 [&>*:has(+:hover)]:size-10',
          '[&>*:hover]:text-primary',
        )}
      >
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
  )
}
