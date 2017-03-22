import Vue from "vue";
import { Component, Inject } from "vue-property-decorator";
import { Container } from "inversify";
import SERVICE_IDENTIFIER from "../models/Identifiers";
import { Ninja as _Ninja } from "../models/Warrior";

@Component({
  name: "Ninja"
})
export default class Ninja extends Vue {
  warrior: string;
  weapon: string;

  @Inject(SERVICE_IDENTIFIER.CONTAINER)
  private _container: Container;

  private _ninja: _Ninja;

  created (): void {
    this._ninja = this._container.get<_Ninja>(SERVICE_IDENTIFIER.WARRIOR);

    this.warrior = this._ninja.name;
    this.weapon = this._ninja.weapon.name;
  }
}
