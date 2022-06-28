module.exports = {
  base:'/gulu-ui/',
  title: "Bumble's gulu UI",
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '交流', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '入门',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/get-started/',
          '/install/'
        ]
      },
      {
        title: '组件',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/components/button'

        ],
      }
    ]
  }
}
