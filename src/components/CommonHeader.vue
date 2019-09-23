<template>
  <span class="header-text">
    <img class="header-logo" height="64px" alt="Header logo" src="../assets/header_logo.png">
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  methods: {}
})
export default class CommonHeader extends Vue {}
</script>

<style scoped>
.header-text {
  font-size: 2em;
  color: lightgray;
}
.header-logo {
  margin-top: 8px;
  margin-bottom: 8px;
  height: 100%;
}
</style>