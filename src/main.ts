import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import VMDPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import Prism from "prismjs";

import "./assets/main.css";

import router from "./router";
import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
VMDPreview.use(vuepressTheme, {
  Prism,
});
app.use(VMDPreview);
app.use(router);
app.use(createPinia());

app.mount("#app");
