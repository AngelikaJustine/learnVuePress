import Vue from 'vue'
Vue.component("OtherComponent", () => import("D:\\PROJECT\\PERSONAL\\learnVuePress\\learnVuePress\\documentation\\docs\\src\\.vuepress\\components\\OtherComponent"))
Vue.component("demo-component", () => import("D:\\PROJECT\\PERSONAL\\learnVuePress\\learnVuePress\\documentation\\docs\\src\\.vuepress\\components\\demo-component"))
Vue.component("Foo-Bar", () => import("D:\\PROJECT\\PERSONAL\\learnVuePress\\learnVuePress\\documentation\\docs\\src\\.vuepress\\components\\Foo\\Bar"))
Vue.component("Badge", () => import("D:\\PROJECT\\PERSONAL\\learnVuePress\\learnVuePress\\documentation\\docs\\node_modules\\@vuepress\\theme-default\\global-components\\Badge"))
Vue.component("CodeBlock", () => import("D:\\PROJECT\\PERSONAL\\learnVuePress\\learnVuePress\\documentation\\docs\\node_modules\\@vuepress\\theme-default\\global-components\\CodeBlock"))
Vue.component("CodeGroup", () => import("D:\\PROJECT\\PERSONAL\\learnVuePress\\learnVuePress\\documentation\\docs\\node_modules\\@vuepress\\theme-default\\global-components\\CodeGroup"))


export default {}