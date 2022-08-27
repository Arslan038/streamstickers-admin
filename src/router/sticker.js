const dashboard = [
  {
    path: '/stickers',
    name: 'stickers',
    component: () => import('@/views/stickers/Stickers.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/stickers/custom',
    name: 'custom-stickers',
    component: () => import('@/views/stickers/Custom.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/stickers/reward',
    name: 'reward-stickers',
    component: () => import('@/views/stickers/Reward.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default dashboard
