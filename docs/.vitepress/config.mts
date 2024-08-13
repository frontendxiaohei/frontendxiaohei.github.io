import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端杂货店",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'shader', link: '/shader/common' }
    ],
    sidebar: [
      {
        text: 'shader',
        items: [
          { text: '常用的shader', link: '/shader/common' },
          { text: '矩阵的基础知识', link: '/shader/matrix' },
          { text: '常用的glsl函数', link: '/shader/common-func' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
