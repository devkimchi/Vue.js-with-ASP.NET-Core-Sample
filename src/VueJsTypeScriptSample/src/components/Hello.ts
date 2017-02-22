import * as Vue from "vue";
import Component from "vue-class-component";
import * as OnlyClass from "components/OnlyClass.vue";
import * as BothProps from "components/BothProps.vue";

@Component({
  name: "hello",
  components: {
    OnlyClass,
    BothProps
  }
})
export default class Hello extends Vue {
  msg: string = "Welcome to Your Vue.js App";
}
