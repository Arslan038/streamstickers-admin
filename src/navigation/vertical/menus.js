import emojiHappy from '@/assets/images/emoji_happy.png'
import chat from '@/assets/images/message_one_point.png'
import grid from '@/assets/images/news_grid.png'
import profile from '@/assets/images/profile.png'

export default [
  {
    title: 'Dashboard',
    icon: grid,
    iconType: 'image',
    to: 'dashboard-crm',
  },
  {
    title: 'Stickers',
    icon: emojiHappy,
    iconType: 'image',
    badge: '20',
    badgeColor: 'red',
    children: [
      {
        title: 'Custom',
        to: 'stickers',
      },
      {
        title: 'Reward',
        to: 'reward-stickers',
      },
      {
        title: 'Power',
        to: 'dashboard-eCommerce',
      },
      {
        title: 'Global',
        to: 'dashboard-eCommerce',
      },
    ],
  },
  {
    title: 'Profile',
    icon: profile,
    iconType: 'image',
    to: 'profile',
  },
  {
    title: 'Sticker Party',
    icon: emojiHappy,
    iconType: 'image',
    to: 'sticker-party',
  },
  {
    title: 'Chat Bot',
    icon: chat,
    iconType: 'image',
    badge: '20',
    badgeColor: 'red',
    to: 'chat-bot',
  },
  {
    title: 'Insights',
    icon: emojiHappy,
    iconType: 'image',
    to: 'insights',
  },
  {
    title: 'Settings',
    icon: emojiHappy,
    iconType: 'image',
    children: [
      {
        title: 'Settings',
        to: 'settings',
      },
    ],
  },
]
