<template>
  <div class="return-to-home" @click="router.push('/')">返回首页</div>
  <div class="main">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let router = require("vue-router").useRouter();
</script>

<style scoped>
</style>