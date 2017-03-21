<template>
  <div class="ninja">
    <h2>Warrior: {{ warrior }}</h2>
    <h2>Weapon: {{ weapon }}</h2>
  </div>
</template>

<script lang="ts">
import Ninja from "./Ninja.ts";
export default Ninja;
</script>

<style scoped>
h2 {
  font-weight: normal;
}
</style>