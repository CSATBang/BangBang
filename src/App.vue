<template>
    <router-view v-slot="{Component}">
        <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
            mode="out-in">
            <keep-alive>
                <component :is="Component" :key="$route.path"/>
            </keep-alive>
        </transition>
    </router-view>
</template>

<script>
export default {
    name: "App",
    beforeCreate() {
        let url = window.location.origin + window.location.pathname;
        if (url.endsWith('/')) {
            url = url.substring(0, url.length - 1);
        }
        window.baseUrl = url;
        console.log('baseUrl: ' + url);
    }
};
</script>