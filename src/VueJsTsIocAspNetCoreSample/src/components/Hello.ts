import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
import Ninja from "./Ninja.vue";

@Component({
  name: "Hello",
  components: {
    "ninja": Ninja
  }
})
export default class Hello extends Vue {
  msg: string = "Welcome to Your Vue.js App";

  created (): void {
    axios
      .get("/api/hello")
      .then((res: any) => {
        this.msg = res.data.message;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
