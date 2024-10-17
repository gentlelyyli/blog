import comp from "E:/CODE__CODE/blog/docs/.vuepress/.temp/pages/page/学习笔记/git使用方法.html.vue"
const data = JSON.parse("{\"path\":\"/page/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/git%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95.html\",\"title\":\"git 一些基础方法\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1711356074000,\"contributors\":[{\"name\":\"Skillful Li\",\"email\":\"lwangluoab@163.com\",\"commits\":1}]},\"filePathRelative\":\"page/学习笔记/git使用方法.md\"}")
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
