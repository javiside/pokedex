import { createApp } from "vue";
import { Alert, Skeleton } from "ant-design-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";

createApp(App).use(router).use(store).use(Alert).use(Skeleton).mount("#app");
