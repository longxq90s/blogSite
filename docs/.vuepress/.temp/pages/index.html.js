export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/logo.png\",\"heroText\":\"Simple Technic Blog\",\"tagline\":\"简单易懂的博客\",\"actions\":[{\"text\":\"快速上手 →\",\"link\":\"/TypeScript/welcome\",\"type\":\"primary\"}],\"features\":[{\"title\":\"简洁至上\",\"details\":\"以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\"},{\"title\":\"Vue驱动\",\"details\":\"享受 Vue 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\"},{\"title\":\"高性能\",\"details\":\"VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1664889512000,\"contributors\":[{\"name\":\"Maxwelllong\",\"email\":\"52107984+Maxwelllong@users.noreply.github.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

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
