<template>
    <div class="screen-full flex-center" style="align-items: normal;">
        <div class="screen-left-up">实验原理</div>
        <div class="experiment-content">
            <p>{{ showContent }}</p>
        </div>
    </div>
</template>

<script setup>
//实验原理
import { inject, ref } from "vue";

let experiment = inject('experiment');
let showContent = ref(experiment.principle);
</script>

<style scoped>

</style>