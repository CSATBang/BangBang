<template>
    <div class="first-layout" style="flex-direction: column;">
        <div class="goto-home" @click="$router.push('/')">返回首页</div>
        <div class="text-content default-border">
            <Topic v-for="(item, i) in topics" :key="i" :index="i" :topic="item">
                <hr v-if="i !== 7">
            </Topic>
        </div>
        <button class="submit-answer" @click="Submit">提交</button>
    </div>
</template>


<script>
import Topic from "./Topic";
//实验习题
export default {
    name: "Problem",
    components: {
        Topic,
    },
    created() {
        this.topics = this.$store.getters.GetRandomTopic();
    },
    data() {
        return {
            //题目
            topics: [],
        };
    },
    methods: {
        Submit() {
            let score = 0;
            this.topics.forEach((topic, index) => {
                if (topic.select === topic.right) {
                    score += index < 4 ? 15 : 10;
                }
            });
            if (score >= 80) {
                this.$store.commit('setShowEXP', true);
                this.$store.commit('setShowResult', true);
            }
            alert(score >= 80 ? '通过' : '不通过');
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>
</style>