import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Architecture', link: '/architecture/' },
      { text: 'GitHub', link: 'https://github.com/gitgitmunassir/gitgitmunassir.github.io' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          children: [
            '/guide/',
            '/guide/installation.md',
            '/guide/configuration.md',
          ],
        },
        {
          text: 'Admin',
          children: [
            '/guide/admin-menu.md',
            '/guide/import-export.md',
          ],
        },
      ],
      '/architecture/': [
        {
          text: 'Architecture',
          children: [
            '/architecture/',
            '/architecture/database.md',
            '/architecture/events-cron.md',
            '/architecture/message-queues.md',
            '/architecture/api-flows.md',
          ],
        },
      ],
    },
    lastUpdated: true,
    contributors: false,
  }),

  lang: 'en-US',
  title: 'eBay Magento Connect',
  description: 'Documentation for Webkul eBay Magento Connect extension',

  // User site: https://gitgitmunassir.github.io/
  base: '/',
})
