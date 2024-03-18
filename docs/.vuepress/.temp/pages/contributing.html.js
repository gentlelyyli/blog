import comp from "F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/contributing.html.vue"
const data = JSON.parse("{\"path\":\"/contributing.html\",\"title\":\"学习Markdown语法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"学习Markdown语法\",\"description\":\"尝试语法\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"contributing.md\"}")
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
