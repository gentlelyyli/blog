export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/contributing.html", { loader: () => import(/* webpackChunkName: "contributing.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/contributing.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/CODE__CODE/gentlelyyli.github.io/gentlelyyli.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
