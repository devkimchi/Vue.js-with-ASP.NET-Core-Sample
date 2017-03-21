import Vue from "vue";
import Component from "vue-class-component";
import SERVICE_IDENTIFIER from "../models/Identifiers";
import container from "../configs/DependencyConfigs";
import { Ninja as _Ninja } from "../models/Warrior";

@Component({
  name: "Ninja"
})
export default class Ninja extends Vue {
  warrior: string;
  weapon: string;

  private _ninja: _Ninja;

  created (): void {
    this._ninja = container.get<_Ninja>(SERVICE_IDENTIFIER.WARRIOR);

    this.warrior = this._ninja.name;
    this.weapon = this._ninja.weapon.name;
  }
}
