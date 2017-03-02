import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component({
  name: "Hello",
})
export default class Hello extends Vue {
  msg: string = "Welcome to Your Vue.js App";
  created (): void {
    axios
        .get("/api/hello")
        .then((res) => {
          this.msg = res.data.message;
        })
        .catch((ex) => console.log(ex));
  }
}
