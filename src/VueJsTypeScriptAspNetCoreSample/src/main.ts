// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import * as Vue from "vue";
import * as App from "./App.vue";
import router from "./router";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
  // template: '<App/>',
  // components: { App }
});
