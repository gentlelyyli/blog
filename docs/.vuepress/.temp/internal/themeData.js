export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"css\",\"children\":[\"/pages/css/css01.md\",\"/pages/css/css02.md\"]},{\"text\":\"js\",\"children\":[{\"text\":\"js基础\",\"children\":[\"/pages/js/js01.md\",\"/pages/js/js02.md\"]},{\"text\":\"js高级\",\"children\":[\"/pages/js/js03.md\"]}]}],\"sidebar\":{\"/pages/js/\":[{\"text\":\"js1\",\"collapsible\":true,\"children\":[\"/pages/js/js01.md\",\"/pages/js/js02.md\"]},{\"text\":\"js2\",\"collapsible\":true,\"children\":[\"/pages/js/js03.md\"]}],\"/pages/css/\":[{\"text\":\"css\",\"collapsible\":true,\"children\":[\"/pages/css/css01.md\",\"/pages/css/css02.md\"]}],\"/pages/html/\":[{\"text\":\"html\",\"collapsible\":true,\"children\":[\"/pages/html/html01.md\",\"/pages/html/html02.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
