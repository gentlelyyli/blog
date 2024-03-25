import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  //theme: defaultTheme(),

  lang: 'zh-CN',
  title: '白先生',
  description: '对于博客的定义暂时不清楚，等待之后补充，目前最为一个文档记录的平台',
  head:[['link',{rel:'icon',herf:'/1.jpg'}]],
  ///date: '2024.3.25',

  theme: defaultTheme({


    navbar:[
      {
      text:'首页',link:'/',
      },

      {
        text: '学习笔记',
       //link:'/page/学习笔记/git使用方法',
        children:['/page/学习笔记/git使用方法'],
      },



      {
        text: 'js',
        children: [
          {
            text: 'js基础',
           //link:'/page/js/js01',
            children: ['js001.md', '/page/js/js02'],
          },
          {
            text: 'jstest',
            link:'/page/js/jitest/ssd',
            //children: ['/page/js/jitest/ssd'],
          },
        ],
      }
    ],

   sidebar: [

    /*
      '/pages/js/': [
        {
          text: 'js1',
          collapsible: true, // 可折叠
          children: ['/pages/js/js01', '/pages/js/js02'],
        },
        {
          text: 'js2',
          collapsible: true,
          children: ['/pages/js/js03'],
        },
      ],
      */
     {
       text:'学习笔记',


     }

      
      ] ,  

  }),


})
