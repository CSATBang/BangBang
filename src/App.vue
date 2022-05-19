<template>
    <router-view v-slot="{Component}">
        <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
            mode="out-in">
            <keep-alive>
                <component :is="Component" :key="route.path"/>
            </keep-alive>
        </transition>
    </router-view>
</template>

<script setup>
let route = require('vue-router').useRoute();
</script>