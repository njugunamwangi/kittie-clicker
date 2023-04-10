import { createApp } from "vue";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.mount("#app");

// createApp(App) = new Vue({
//     router,
//     store,
//     PrimeVue,
//     render: h => h(App)
// }).$mount('#app')
