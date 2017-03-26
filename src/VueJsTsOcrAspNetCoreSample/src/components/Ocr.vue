<template>
  <div>
    <div class="image-input">
        <input type="file" id="ocr-input" accept="image/*" capture="camera" ref="ocrInput" />
        <button type="button" v-on:click="getText">Submit</button>
    </div>

    <div class="image-output">
        <img id="ocr-image" ref="ocrOutput" />
    </div>

    <div class="cognitive-result">
        <textarea id="ocr-result" width="50" height="200px" ref="ocrResult"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import Ocr from "./Ocr.ts";
export default Ocr;
</script>