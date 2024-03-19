import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default ({
  bundler: viteBundler(),
 // theme: defaultTheme(),

  lang: 'zh-CN',
  title: '白先生神圣不容侵犯！！',
  description: '这是我的第一个 VuePress 站点',
  head:[['link',{rel:'icon',herf:'/1.jpg'}]],

  theme: defaultTheme({
    navbar:[
      {
      text:'首页',
      link:'/',
      },

      {
        text: 'css',
        children: ['/pages/css/css01.md', '/pages/css/css02.md'],
      },



      {
        text: 'js',
        children: [
          {
            text: 'js基础',
            children: ['/pages/js/js01.md', '/pages/js/js02.md'],
          },
          {
            text: 'js高级',
            children: ['/pages/js/js03.md'],
          },
        ],
      }


      

    ],

    sidebar: {
      '/pages/js/': [
        {
          text: 'js1',
          collapsible: true, // 可折叠
          children: ['/pages/js/js01.md', '/pages/js/js02.md'],
        },
        {
          text: 'js2',
          collapsible: true,
          children: ['/pages/js/js03.md'],
        },
      ],
      '/pages/css/': [
        {
          text: 'css',
          collapsible: true,
          children: ['/pages/css/css01.md', '/pages/css/css02.md'],
        },
      ],
      '/pages/html/': [
        {
          text: 'html',
          collapsible: true,
          children: ['/pages/html/html01.md', '/pages/html/html02.md'],
        },
      ],
    },


  }),
})
