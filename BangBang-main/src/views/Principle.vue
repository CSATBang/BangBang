<template>
  <div class="return-to-home" @click="router.push('/')">返回首页</div>
  <div class="right">
    <p>
      对于二元物系，如已知其汽液平衡数据，则根据精馏塔的原料液组成，进料热状况，操作回流比及塔顶馏出液组成，塔底釜液组成可以求出该塔的理论板数NT，按照式1可以得到总板效率ET，其中NP为实际塔板数。
    </p>
    <dl>
      <dt><strong>(1)</strong></dt>
    <span>
      {{question1}}
    </span>
    </dl>
    <p>
      在全回流条件下，只要测得塔顶馏出液组成和塔底组成，即可根据双组份物系的相平衡关系，在图上通过图解法求得理论板数；而塔内实际板数已知，根据上式可求得全塔效率。
    </p>
    <p>
      在部分回流条件下，理论板数NT
      由已知的双组分物系平衡关系，通过实验测得塔顶产品组成xD、进料组成xF、回流比R、进料温度
      tF
      等得出精馏段操作线方程及q线方程，根据塔釜组成xW确定提馏段操作线方程，利用图解法计算求得理论板数，进而求得全塔效率。
    </p>
    <p><strong>部分回流时，进料热状况参数的计算式为:<br></strong></p>
    <dl>
    <dt><strong>(2)</strong></dt>
    <span>
      {{question2}}
    </span>
    </dl>
    <h3>式中:</h3><br>
      <p class="mathJaxFont">$$t_F — 进料温度，℃ ； $$$$t_{BP} — 进料的泡点温度，℃ ;$$</p>
      <p class="mathJaxFont">$$C_{pm} —进料液体在平均温度(t_F+ t_P)/2下的比热，kJ/(kmol·℃);$$</p>
      <p class="mathJaxFont">$$r_m —进料液体在其组成和泡点温度下的汽化潜热，kJ/kmol。$$</p><br>

    <dl>
    <dt><strong>(3)</strong></dt>
    <span>
      {{question3}}
    </span>
    </dl>

    <dl>
    <dt><strong>(4)</strong></dt>
    <span>
      {{question4}}
    </span>
    </dl>
    <h3>式中:</h3><br>
      <p class="mathJaxFont">$$C_{P1}、C_{P2} —分别为纯组份1和组份2在平均温度下的比热，kJ/(kg·℃);$$</p>
      <p class="mathJaxFont">$$r_1、r_2 —分别为纯组份1和组份2在泡点温度下的汽化潜热，kJ/kg;$$</p>
      <p class="mathJaxFont">$$M_1、M_2—分别为纯组份1和组份2的摩尔质量，kJ/kmol;$$</p>
      <p class="mathJaxFont">$$x_1、x_2—分别为纯组份1和组份2在进料中的摩尔分率。$$</p><br>
  </div>
</template>



<script>
import MathJax from "../MathJax";

export default {
  name: "math",
  //1.在data中定义数学公式，注意数学公式需要用**$$**签后包裹，中间才是公式内容
  data() {
    return {
      question1: "$$\E_T=\\frac{N_T}{N_P}\*100\\% $$",
      question2: "$$\q=\\frac{C_{pm}(t_BP-t_F)+r_m}{r_m}$$",
      question3: "$$C_(pm)=C_{p1}M_1X_1+C_{p2}M_2X_2$$",
      question4:"$$r_m=r_1M_1X_1+r_2M_2X_2$$"
    };
  },
  //在页面创建的时候调用methods中的formatMath的方法
  created() {
    this.formatMath();
  },
  methods: {
    formatMath() {
      setTimeout(() => {
        this.$nextTick(() => {
          if (this.MathJax.isMathjaxConfig) {
            this.MathJax.initMathjaxConfig();
          }
          //这个地方的hello是对应要渲染数学公式的dom的class
          this.MathJax.MathQueue("right");
        });
      }, 500);
    },
  },
};
</script>

<script setup>
import { ref } from "vue";

let router = require("vue-router").useRouter();
</script>

<style  scoped lang="less">
            .mathJaxFont {
                font-size: 18px;
                margin: 16px;
                width: max-content;

                /deep/ .MJXc-display {
                    text-align: left !important;
                }
            }
</style>
