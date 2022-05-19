<template>
    <div class="first-layout">
        <div class="goto-home" @click="$router.push('/')">返回首页</div>
        <iframe class="simulation-iframe"></iframe>
    </div>
</template>

<script>
//实验仿真
export default {
    name: "Simulation",
    methods: {
        ExportAll(data) {
            console.log(data);
        }
    }
};
</script>

<style scoped>

</style>