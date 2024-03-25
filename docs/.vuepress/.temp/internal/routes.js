export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/page/js/js01.html", { loader: () => import(/* webpackChunkName: "js01.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/page/js/js01.html.js"), meta: {"title":""} }],
  ["/page/js/js02.html", { loader: () => import(/* webpackChunkName: "js02.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/page/js/js02.html.js"), meta: {"title":""} }],
  ["/page/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/git%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "git使用方法.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/page/学习笔记/git使用方法.html.js"), meta: {"title":"git 一些基础方法"} }],
  ["/page/js/jstest/ssd.html", { loader: () => import(/* webpackChunkName: "ssd.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/page/js/jstest/ssd.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
