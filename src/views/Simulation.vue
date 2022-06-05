<template>
    <div class="first-layout">
        <div class="goto-home" @click="$router.push('/')">返回首页</div>
        <iframe ref="unity" class="simulation-iframe" :src="origin"></iframe>
    </div>
</template>

<script>
//实验仿真
export default {
    name: "Simulation",
    data(){
        return{
            origin: window.baseUrl + '/unity/index.html',
        }
    },
    mounted() {
        let wid = this.$refs.unity.contentWindow;
        //导出的数据
        wid.ExportData = (data)=>{
            this.$store.commit('setScore', data);
            console.log('导出-ExportData', data);
        };
    }
};
</script>

<style scoped>

</style>