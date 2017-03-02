import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component({
  name: "Hello",
})
export default class Hello extends Vue {
  src: string = null;
  width: string = "400";
  height: string = "300";
  autoplay: boolean = true;
  photo: string = null;
  screenshotFormat: string = "image/jpeg";

  private _refs: { [key: string] : Vue | Element | Vue[] | Element[] } = null;
  private _video: HTMLVideoElement = null;
  private _stream: MediaStream = null;
  private _hasUserMedia: boolean = false;
  private _ctx: CanvasRenderingContext2D = null;

  msg: string = "Welcome to Your Vue.js App";

  takePhoto (): void {
    if (!this._hasUserMedia) {
      return;
    }

    var canvas: HTMLCanvasElement = this.getCanvas();

    this.photo = canvas.toDataURL(this.screenshotFormat);
  }

  getCanvas (): HTMLCanvasElement {
    if (!this._hasUserMedia) {
      return null;
    }

    if (this._ctx == null) {
      var canvas: HTMLCanvasElement = document.createElement("canvas");
      canvas.height = this._video.clientHeight;
      canvas.width = this._video.clientWidth;

      this._ctx = canvas.getContext("2d");

      this._ctx.drawImage(this._video, 0, 0, canvas.width, canvas.height);

      return canvas;
    }

    return null;
  }

  mounted (): void {
    this._refs = this.$refs;
    this._video = <HTMLVideoElement>this._refs["video"];

    var n: any = <any>navigator;
    n.getUserMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia ||   n.msGetUserMedia || n.oGetUserMedia;

    if (n.getUserMedia) {
      n.getUserMedia({ video: true },
        (stream) => {
          this.src = window.URL.createObjectURL(stream);
          this._stream = stream;
          this._hasUserMedia = true;
        },
        (error) => {
          console.log(error);
      });
    }
  }

  created (): void {
    axios
      .get("/api/hello")
      .then((res) => {
        this.msg = res.data.message;
      })
      .catch((ex) => console.log(ex));
  }

  beforeDestroy (): void {
    this._video.pause();
    this.src = "";
    this._stream.getTracks()[0].stop();
  }

  destroyed (): void {
    console.log("Destroyed");
  }
}
