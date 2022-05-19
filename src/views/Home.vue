<template>
    <div class="screen-full flex-center">
        <ul class="home-list">
            <li @click="Goto('/purpose')">实验目的</li>
            <li @click="Goto('/principle')">实验原理</li>
            <li @click="Goto('/problem')">实验习题</li>
            <li v-if="store.state.showEXP" @click="Goto('/simulation')">仿真实验</li>
            <li v-if="store.state.showData" @click="Goto('/processing')">数据处理</li>
            <li v-if="store.state.showResult" @click="Goto('/result')">查看结果</li>
        </ul>
    </div>
</template>

<script setup>
//首页
import store from "@/store";
import { useRouter } from "vue-router";

let router = useRouter();

function Goto(path){
    router.push(path);
}
</script>
