/**
 * Community data for the "Join the Community" section.
 * Edit links or stats here. Set `enabled: false` to hide an entry.
 */

export type CommunityLink = {
  id: string;
  /** href for the anchor. Can be external (https://...) or a full invite link. */
  href: string;
  /** Short heading shown on the tile (e.g. "Join on Telegram") */
  title: string;
  /** Short description shown under the title */
  desc?: string;
  /** class key used by the component to pick styles (telegram, discord, tiktok, etc.) */
  styleKey?: string;
  /** icon key to allow mapping to specific SVGs in the component */
  iconKey?: 'telegram' | 'discord' | 'tiktok' | string;
  enabled?: boolean;
};

export const communityLinks: CommunityLink[] = [
  {
    id: 'telegram',
    href: 'https://t.me/yourchannel',
    title: 'Join on Telegram',
    desc: 'Connect instantly with our learning community on Telegram.',
    styleKey: 'telegram',
    iconKey: 'telegram',
    enabled: true,
  },
  {
    id: 'discord',
    href: 'https://discord.gg/yourserver',
    title: 'Join on Discord',
    desc: 'Chat, share, and learn with our vibrant Discord community.',
    styleKey: 'discord',
    iconKey: 'discord',
    enabled: true,
  },
  {
    id: 'tiktok',
    href: 'https://www.tiktok.com/@yourprofile',
    title: 'Follow on TikTok',
    desc: 'Watch tips, tutorials, and success stories on our TikTok channel.',
    styleKey: 'tiktok',
    iconKey: 'tiktok',
    enabled: true,
  },
];

export const communityStats: string[] = [
  '500+ Active Students',
  '100+ Weekly Conversations',
];

export default { communityLinks, communityStats };
