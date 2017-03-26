import Vue from "vue";
import { Component, Inject } from "vue-property-decorator";
import { AxiosStatic, AxiosRequestConfig, AxiosResponse } from "axios";
import Symbols from "../configs/Symbols";

@Component({
  name: "Ocr"
})
export default class Ocr extends Vue {
  @Inject(Symbols.Axios)
  private _axios: AxiosStatic;

  private _ocrInput: HTMLInputElement;
  private _ocrOutput: HTMLImageElement;
  private _ocrResult: HTMLTextAreaElement;

  public getText (): void {
    let refs: any = <any>this.$refs;
    this._ocrInput = <HTMLInputElement>refs.ocrInput;
    this._ocrOutput = <HTMLImageElement>refs.ocrOutput;
    this._ocrResult = <HTMLTextAreaElement>refs.ocrResult;

    let file: File = this._ocrInput.files[0];
    let data: FormData = new FormData();
    data.append(file.name, file);

    this._axios
      .post("/api/ocr", data)
      .then((res: AxiosResponse) => {
        this._ocrOutput.src = res.data.ImagePath;
        this._ocrResult.textContent = JSON.stringify(res.data.Result, null, 2);
      })
      .catch((ex: any) => {
        console.log(ex);
      });
  }
}