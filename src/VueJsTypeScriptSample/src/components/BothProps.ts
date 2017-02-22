import * as Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "both-props",
  props: {
    msg: {
      type: String,
      default: "This is BothProps props"
    }
  }
})
export default class BothProps extends Vue {
  msg: string;

  someEvent() {
    // This will be error if there is no declaration on line 14
    this.msg += ""
  }
}
