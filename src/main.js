import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/style.css";

import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/venobox/venobox.css";
import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";
import "./assets/vendor/aos/aos.css";

// Vue.use(BootstrapVue);
// Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
