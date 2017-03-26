import Vue from "vue";
import { Component, Inject } from "vue-property-decorator";
import { AxiosStatic } from "axios";
import Symbols from "../configs/Symbols";
import Ocr from "./Ocr.vue";


@Component({
  name: "Hello",
  components: {
    ocr: Ocr
  }
})
export default class Hello extends Vue {
  public msg: string = "Welcome to Your Vue.js App";

  @Inject(Symbols.Axios)
  private _axios: AxiosStatic;

  created (): void {
    this._axios
      .get("/api/hello")
      .then((res: any) => {
        this.msg = res.data.message;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
