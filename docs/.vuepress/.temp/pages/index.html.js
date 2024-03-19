import comp from "F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"第一个标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/1.jpg\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"/pages/css/css01.html\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/pages/css/css02\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简洁至上\",\"details\":\"以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\"},{\"title\":\"Vue 驱动\",\"details\":\"享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。\"},{\"title\":\"高性能\",\"details\":\"VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present Evan You\"},\"headers\":[{\"level\":2,\"title\":\"第二个标题\",\"slug\":\"第二个标题\",\"link\":\"#第二个标题\",\"children\":[]},{\"level\":2,\"title\":\"下滑线\",\"slug\":\"下滑线\",\"link\":\"#下滑线\",\"children\":[]}],\"git\":{\"updatedTime\":1710816715000,\"contributors\":[{\"name\":\"Skillful Li\",\"email\":\"lwangluoab@163.com\",\"commits\":12}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
