import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/webkul-logo.png',
    navbar: [
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Buy Now',
        link: 'https://store.webkul.com/magento2-ebay-connector.html',
      },
      {
        text: 'Support',
        link: 'https://webkul.uvdesk.com/',
      },
      {
        text: 'Live Demo',
        link: 'https://magento2demo.webkul.in/ebayconnector/?demo=Webkul_Ebaymagentoconnect',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          children: [
            '/guide/',
            '/guide/quick-start.md',
            '/guide/features-of-ebay-connector-for-magento-2-adobe-commerce.md',
            '/guide/installation.md',
            '/guide/multilingual.md',
            '/guide/translation.md',
            '/guide/ebay-credentials.md',
          ],
        },
        {
          text: 'Configuration',
          children: [
            '/guide/module-settings.md',
            '/guide/shipping.md',
          ],
        },
        {
          text: 'Category & Product Mapping',
          children: [
            '/guide/map-category.md',
            '/guide/category-automation.md',
            '/guide/map-product.md',
            '/guide/import-product-from-ebay.md',
            '/guide/run-ebay-product-profiler.md',
            '/guide/run-ebay-product-image-profiler.md',
            '/guide/export-product-to-ebay.md',
            '/guide/export-catalog-grid.md',
            '/guide/export-queue-log.md',
            '/guide/bulk-export-tasks.md',
            '/guide/ebay-product-info.md',
            '/guide/bulk-assign-categories.md',
            '/guide/listing-templates.md',
            '/guide/price-rules.md',
            '/guide/price-rule-application.md',
            '/guide/specification-condition.md',
          ],
        },
        {
          text: 'Orders',
          children: [
            '/guide/map-order.md',
            '/guide/missed-order.md',
          ],
        },
        {
          text: 'Advanced',
          children: [
            '/guide/grouped-export.md',
            '/guide/bundle-export.md',
            '/guide/ebay-motors.md',
            '/guide/module-configuration.md',
            '/guide/import-ebay-motors-categories.md',
            '/guide/mapping-the-ebay-motors-category-with-the-store-category.md',
            '/guide/importing-products-from-ebay-motors-to-magento-2.md',
            '/guide/exporting-products-from-magento-2-to-ebay-motors.md',
          ],
        },
      ],
    },
    sidebarDepth: 2,
    lastUpdated: true,
    contributors: false,
    editLink: false,
  }),

  lang: 'en-US',
  title: 'eBay Connector for Magento 2',
  description: 'Official documentation for Webkul eBay Magento Connect extension — import, export, sync orders, and automate listings.',

  head: [
    ['link', { rel: 'icon', href: '/ebay-magento-connector/webkul-logo.png' }],
    ['meta', { name: 'theme-color', content: '#E53238' }],
  ],

  // Project site: https://gitgitmunassir.github.io/ebay-magento-connector/
  base: '/ebay-magento-connector/',
})
