<template>
    <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
        <router-view  v-slot="{Component}" >
            <keep-alive>
                <component :is="Component"/>
            </keep-alive>
        </router-view>
    </transition>
</template>

<script setup>
let route = require('vue-router').useRoute();
let currentRouter = route.path;
</script>