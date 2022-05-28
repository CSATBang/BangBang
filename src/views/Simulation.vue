<template>
    <div class="first-layout">
        <div class="goto-home" @click="$router.push('/')">返回首页</div>
        <iframe ref="unity" class="simulation-iframe" src="/unity/index.html"></iframe>
    </div>
</template>

<script>
//实验仿真
export default {
    name: "Simulation",
    mounted() {
        let wid = this.$refs.unity.contentWindow;
        //导出的数据
        wid.ExportData = this.ExportData;
    },
    methods: {
        ExportData(data) {
            this.$store.commit('setScore', data);
            console.log('导出', data);
        }
    }
};
</script>

<style scoped>

</style>