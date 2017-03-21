import { injectable } from "inversify";
import Weapon from "../interfaces/Weapon";

@injectable()
class Shuriken implements Weapon {
    public constructor() {
        this.name = "Shuriken";
    }

    public name: string;
}

@injectable()
class Katana implements Weapon {
    public constructor() {
        this.name = "Katana";
    }

    public name: string;
}

export { Shuriken, Katana };
