<template>
    <div style="width: 100%">
        <div class="question">{{ index + 1 }} : {{ topic.question }}</div>
        <ul class="answer">
            <li v-for="(answer, i) in topic.answer" :key="i">
                <input v-model="topic.select" :name="answer" :value="answer" type="radio"/>
                <label>{{ answer }}</label>
            </li>
        </ul>
    </div>
    <slot/>
</template>

<script>
export default {
    name: "Topic",
    props: ['topic', 'index'],
};
</script>
<style scoped>
</style>
