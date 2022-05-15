<template>
  <div class="aaaa">
    <div class="div" v-for="(son, index) in list_a" :key="index">
      <div class="question">{{ index + 1 }}:{{ son.question }}</div>

      <div  class="answer">
        <li v-for="(sson, index1) in son.answer" :key="index1">
          <label>{{ sson.value }}</label>
          <input
            type="radio"
            :name="son.name"
            :value="sson.value"
            @change="get_radio_value(index)"
            v-model="checkedValue[index]"
          />
        </li>

        <div style="clear: both"></div>
      </div>
      <hr />
    </div>
    <div class="submit">
      <button @click="btnfun">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "bank",
  data: function () {
    return {
      all_list: [],
      checkedValue: [], // 绑定单选框的值
    };
  },

  props: ["list_a"],
  methods: {
    btnfun: function () {
      // 获取input框的值
      console.log(this.all_list);
      // 如果答案长度不匹配list_a
      // this.all_list = this.all_list.null
      // console.log(this.all_list)
      for (var i = 0; i < this.all_list.length; i++) {
        if (
          this.all_list[i] === "" ||
          typeof this.all_list[i] === "undefined"
        ) {
          this.all_list.splice(i, 1);
        }
      }
      // 循环
      if (this.list_a.length !== this.all_list.length) {
        console.log("答案没有选择完毕");
      } else {
        console.log("答案选择完毕");
        // 传值给调用页面
        this.$emit("transfer", this.all_list);
      }
    },
    get_radio_value: function (index) {
      // 获取当前radio当前值
      console.log(index + 1 + "题" + this.checkedValue);
      this.all_list[index] = this.checkedValue[index];
    },
  },
};
</script>
<style scoped>
.aaaa {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 10px;
  border: 2px solid #fff;
  border-radius: 15px;
}
li {
  list-style: none;
}
.div {
  margin: 6px 0px;
}
.question {
  width: 100%;
  padding: 6px;
  text-align: left;
}
.type {
  width: 200px;
  text-align: left;
}
.answer li {
  width: 100%;
  height: 30px;
}
.submit {
  text-align: center;
}
.answer input {
  float: left;
}
</style>
