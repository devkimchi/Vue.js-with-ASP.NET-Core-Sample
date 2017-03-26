import Vue from "vue";
import Component from "vue-class-component";
import Symbols from "./configs/Symbols";
import axios from "axios";

@Component({
  name: "App",
  provide: {
    [Symbols.Axios]: axios
  }
})
export default class App extends Vue {
}
