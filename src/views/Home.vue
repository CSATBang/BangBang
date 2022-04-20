<template>
    <div class="home-nav">
        <ul>
            <li v-for="item in nav" @click="router.push(item.route)">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script setup>
//首页

let router = require("vue-router").useRouter();
let name = 'Home';
let nav = [
    {name: '实验目的', route: '/purpose'},
    {name: '实验原理', route: '/'},
    {name: '仿真实验', route: '/'},
    {name: '数据处理', route: '/'},
    {name: '实验习题', route: '/'},
    {name: '查看结果', route: '/'},
];

</script>
