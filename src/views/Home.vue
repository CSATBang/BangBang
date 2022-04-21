<template>
    <div class="home-nav">
        <div style="font-size: 1.4rem;">主菜单</div>
        <hr style="width: 400px;">
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
    {name: '实验原理', route: '/principle'},
    {name: '仿真实验', route: '/simulation'},
    {name: '数据处理', route: '/dispose'},
    {name: '实验习题', route: '/exercises'},
    {name: '查看结果', route: '/result'},
];

</script>
