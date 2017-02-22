import * as Vue from "vue";
import * as Router from "vue-router";
import Hello from "components/Hello.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    }
  ]
});
