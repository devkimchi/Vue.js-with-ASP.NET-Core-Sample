import Vue from "vue";
import Component from "vue-class-component";
import SERVICE_IDENTIFIER from "./models/Identifiers";
import container from "./configs/DependencyConfigs";

@Component({
  name: "App",
  provide: {
    [SERVICE_IDENTIFIER.CONTAINER]: container
  }
})
export default class App extends Vue {
}
