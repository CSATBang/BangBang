<template>
    <div class="return-to-home" @click="router.push('/')">返回首页</div>
</template>

<script setup>
let router = require("vue-router").useRouter();
</script>
