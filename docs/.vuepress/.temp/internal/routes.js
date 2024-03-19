export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/contributing.html", { loader: () => import(/* webpackChunkName: "contributing.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/contributing.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"第一个标题"} }],
  ["/guide/text.html", { loader: () => import(/* webpackChunkName: "text.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/guide/text.html.js"), meta: {"title":""} }],
  ["/page/css/css01.html", { loader: () => import(/* webpackChunkName: "css01.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/page/css/css01.html.js"), meta: {"title":""} }],
  ["/page/css/css02.html", { loader: () => import(/* webpackChunkName: "css02.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/page/css/css02.html.js"), meta: {"title":""} }],
  ["/page/html/html01.html", { loader: () => import(/* webpackChunkName: "html01.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/page/html/html01.html.js"), meta: {"title":""} }],
  ["/page/html/html02.html", { loader: () => import(/* webpackChunkName: "html02.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/page/html/html02.html.js"), meta: {"title":""} }],
  ["/page/js/js01.html", { loader: () => import(/* webpackChunkName: "js01.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/page/js/js01.html.js"), meta: {"title":""} }],
  ["/page/js/js02.html", { loader: () => import(/* webpackChunkName: "js02.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/page/js/js02.html.js"), meta: {"title":""} }],
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
