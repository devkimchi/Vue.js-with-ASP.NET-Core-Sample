import Vue from "vue";
import Component from "vue-class-component";
import Ninja from "./Ninja.vue";

@Component({
  name: "Hello",
  components: {
    "ninja": Ninja
  }
})
export default class Hello extends Vue {
  msg: string = "Welcome to Your Vue.js App";
}
