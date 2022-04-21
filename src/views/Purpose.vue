<template>
    <div class="purpose">
        <div class="screen-left-up">实验目的</div>
        <div class="experiment-content">
            <p>{{ showContent }}</p>
        </div>
    </div>
</template>

<script setup>
//实验目的
import { inject, ref } from "vue";

let experiment = inject('experiment');

let purpose = experiment.purpose;

let showContent = ref(experiment.purpose);

let index = 0;

function addIndex() {
    console.log('增加', index, purpose);
    index += 1;
    if (index >= purpose.length) {
        index = 0;
    }
    showContent.value = purpose[index];
}

function removeIndex() {
    if (index <= 0) {
        index = purpose.length - 1;
    }
    else {
        index -= 1;
    }
    showContent.value = purpose[index];
}
</script>

<style scoped>

</style>