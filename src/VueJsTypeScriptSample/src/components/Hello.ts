import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "Hello"
})
export default class Hello extends Vue {
  msg: string = "Welcome to Your Vue.js App";
}
