import Vue from "vue";
import Component from "vue-class-component";
import SERVICE_IDENTIFIER from "../models/Identifiers";
import container from "../configs/DependencyConfigs";
import { Ninja } from "../models/Warrior";

@Component({
  name: "Hello",
})
export default class Hello extends Vue {
  msg: string = "Welcome to Your Vue.js App";
  warrior: string;
  weapon: string;

  private _ninja: Ninja;

  created (): void {
    this._ninja = container.get<Ninja>(SERVICE_IDENTIFIER.WARRIOR);

    this.warrior = this._ninja.name;
    this.weapon = this._ninja.weapon.name;
  }
}
