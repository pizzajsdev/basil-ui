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

export function SocialIcons() {
  return (
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
  )
}
