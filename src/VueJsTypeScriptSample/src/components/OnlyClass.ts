import * as Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "only-class"
})
export default class OnlyClass extends Vue {
  // This will be treated as data unless props declaration not exist on
  // Component Decorator
  msg: string = "This is OnlyClass props";

  someEvent() {
    this.msg += ""
  }
}
