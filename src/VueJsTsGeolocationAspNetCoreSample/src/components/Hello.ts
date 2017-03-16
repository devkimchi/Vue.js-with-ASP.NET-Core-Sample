import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component({
  name: "Hello"
})
export default class Hello extends Vue {
  msg: string = "Welcome to Your Vue.js App";
  latitude?: number = null;
  longitude?: number = null;
  altitude?: number = null;

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

  public getLocation (): void {
    var geo: Geolocation = navigator.geolocation;
    if (geo == null) {
      console.log("No geolocation support");
      alert("No support");
      return;
    }

    var options: PositionOptions = new GpsPositionOptions(true, 30000, 30000);
    geo.getCurrentPosition((p: Position) => this.success(p), (ex: PositionError) => this.error(ex), options);
  }

  private success (position: Position): PositionCallback {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.altitude = position.coords.altitude;

    return null;
  }

  private error(ex: PositionError): PositionErrorCallback {
    console.log(ex.message);
    alert(ex.message);
    return null;
  }
}

class GpsPositionOptions implements PositionOptions {
  public constructor (enableHighAccuracy?: boolean, timeout?: number, maximumAge?: number) {
    this.enableHighAccuracy = enableHighAccuracy;
    this.timeout = timeout;
    this.maximumAge = maximumAge;
  }

  public enableHighAccuracy?: boolean;
  public timeout?: number;
  public maximumAge?: number;
}