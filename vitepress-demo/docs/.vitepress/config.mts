import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  lastUpdated: false,
  vite: {
    server: {
      host: '0.0.0.0',
    }
  },
  themeConfig: {
    logo: "vitepress-logo-mini.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/caizhengxin/docker-vitepress' }
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present jankincai"
    },

    // lastUpdated: {
    //   text: 'Updated at',
    //   formatOptions: {
    //     dateStyle: 'full',
    //     timeStyle: 'medium'
    //   }
    // }

    search: {
      provider: 'local'
    }
  }
})
