<template>
  <div class="return-to-home" @click="router.push('/')">返回首页</div>
  <div class="xxxx">
    <bank :list_a="list_a" @transfer="postAnswer" />
  </div>
</template>



<script>
import bank from "./bank";

export default {
  name: "questions",
  components: {
    bank,
  },
  activated(){
    this.myFunction();
  },
  data() {
    return {
    list_a:[],
    list_b : [],
    list_c : []
    }
  },

  methods: {
    myFunction() {
      this.list_b = [
        {id:1,'name': '1', 'question': '精馏塔设计时，若F、xF、xD、xw、V均为定值，将进料热状态从q=1变为q>1，则设计所需理论板数(  )。', 'answer': [{'value': 'A.多'}, {'value': 'B.少'}, {'value': 'C.不变'},{'value': 'D.无法判断'}]},
        {id:2,'name': '2', 'question': '精馏操作时，若F、D、XF、q、加料板位置、R都不变，而将塔顶泡点回流改为冷回流，则塔顶产品组成xD的变化为(  )', 'answer':[{'value':'A.变小'},{'value':'B.变大'},{'value':'C.不变'},{'value':'D.不确定'}]},
        {id:3,'name': '3', 'question': '在常压下苯的沸点为80.1℃，环己烷的沸点为80.73℃，为使这两组份的混合液能得到分离，可采用(  )分离方法。', 'answer':[{'value':'A.恒沸精馏'},{'value':'B.普通精馏'},{'value':'C.萃取精馏'},{'value':'D.水蒸汽直接加热精馏'}]},
        {id:4,'name': '4', 'question': '精馏塔设计时采用的参数F、x F、q、D、xD、R均为定值，若降低塔顶回流液的温度，则所需理论板数(  )', 'answer':[{'value':'A.增大'},{'value':'B.减小'},{'value':'C.不变'},{'value':'D.不确定'}]},
        {id:5,'name': '5', 'question': '某精馏塔的设计任务为:原料为F、xF，塔顶为xD，塔底为xW，若塔釜上升蒸汽量V’不变，加料热状态由原来的饱和蒸汽改为饱和液体，则所需理论板NT()', 'answer':[{'value':'A.增加'},{'value':'B.减少'},{'value':'C.不变'},{'value':'D.不确定'}]},
        {id:6,'name': '6', 'question': '在连续蒸馏操作中，若F、xF、q不变，仅加大回流比时，则可以使塔顶产品浓度xD(  )', 'answer':[{'value':'A.变大'},{'value':'B.变小'},{'value':'C.不变'},{'value':'D.不确定'}]},
        {id:7,'name': '7', 'question': '精馏塔引入回流，使下降的液流与上升的汽流发生传质，并使上升汽相中的易挥发组分浓度提高，最恰当的说法是由于', 'answer':[{'value':'A.液相中易挥发组分进入汽相'},{'value':'B.汽相中难挥发组分进入液相'},{'value':'C.液相中易挥发组分和难挥发组分同时进入汽相，但其中易挥发组分较多'},{'value':'D.液相中易挥发组分进入汽相和汽相中难挥发组分进入液相的现象同时发生'}]},
        {id:8,'name': '8', 'question': '被分离物系最小回流比Rmin的数值与(  )无关。', 'answer':[{'value':'A.被分离物系的汽液平衡关系'},{'value':'B.塔顶产品组成'},{'value':'C.进料组成和进料状态'},{'value':'D.塔底产品组成'}]},
        {id:9,'name': '9', 'question': '维持精馏塔F、q、xD及进料位置不变，减小xF，则有(  )。', 'answer':[{'value':'A.D增大，R减小'},{'value':'B.D不变，R增加'},{'value':'C.D减小，R增加'},{'value':'D.D减小，R不变'}]},
        {id:10,'name': '10', 'question': '精馏塔在一定条件下操作时，将加料口向上移动两层塔板，此时塔顶产品浓度xD将(  )。','answer':[{'value':'A.变大'},{'value':'B.变小'},{'value':'C.不变'},{'value':'D.不确定'}]},
        {id:11,'name': '11', 'question': '精馏塔在操作过程中，若进料量F适当增加，而进料组成，热状况q、回流比R、塔顶馏出物D均不变，则塔釜组成xW将(  )。', 'answer':[{'value':'A.变大'},{'value':'B.变小'},{'value':'C.不变'},{'value':'D.不确定'}]},
        {id:12,'name': '12', 'question': '操作中的精馏塔，保持F、xF、q、 不变，减少D，则塔顶易挥发组分回收率( )。', 'answer':[{'value':'A.变大'},{'value':'B.变小'},{'value':'C.不变'},{'value':'D.不确定'}]},
        {id:13,'name': '13', 'question': '精馏操作时，若F、xF、q、R均不变，将塔顶产品量D增加，则(  )。', 'answer':[{'value':'A.xD下降，xW下降'},{'value':'B.xD下降，xW上升'},{'value':'C.xD下降，xW不变'},{'value':'D.xD不变，xW下降'}]},
        {id:14,'name': '14', 'question': '二元溶液连续精馏计算中，进料热状态的变化将引起以下(  )线的变化。', 'answer':[{'value':'A.平衡线'},{'value':'B.操作线与ｑ线'},{'value':'C.平衡线与操作线'},{'value':'D.平衡线与ｑ线'}]},
        {id:15,'name': '15', 'question': '两组分物系的相对挥发度越小，则表示分离该物系越(  )。', 'answer':[{'value':'A.容易'},{'value':'B.困难'},{'value':'C.完全'},{'value':'D.不完全'}]},
        {id:16,'name': '16', 'question': '精馏操作中，回流比越大，分离效果( )。', 'answer':[{'value':'A.越好'},{'value':'B.越差'},{'value':'C.没变化'},{'value':'D.难确定'}]},
        {id:17,'name': '17', 'question': '对理论板的叙述错误的是(  )。', 'answer':[{'value':'A.板上气液两相呈平衡状态'},{'value':'B.实际上不可能存在'},{'value':'C.是衡量实际塔板分离效率的一个标准'},{'value':'D.比实际塔板数多'}]},
        {id:18,'name': '18', 'question': '塔板上造成雾沫夹带的原因是(  )。','answer':[{'value':'A.气速过大'},{'value':'B.气速过小'},{'value':'C.液流量过大'},{'value':'D.液流量过小'}]},
        {id:19,'name': '19', 'question': '增大精馏塔塔顶冷凝器中的冷却水量，可以( )塔顶压力。', 'answer':[{'value':'A.降低'},{'value':'B.提高 '},{'value':'C.不改变 '}]},
        {id:20,'name': '20', 'question': '精馏过程的理论板假设是指(  )。', 'answer':[{'value':'A.进入该板的气液两相组成相等'},{'value':'B.进入该板的气液两相组成平衡'},{'value':'C.离开该板的气液两相组成相等'},{'value':'D.离开该板的气液两相组成平衡'}]},

    ]

   this.list_c = [
        {id:21,'name': '21', 'question': '精馏段操作线方程为:y=0.75x+0.3，这种情况不可能出现。', 'answer': [{'value': 'A.对'}, {'value': 'B.错'}]},
        {id:22,'name': '22', 'question': '连续稳定进料操作的精馏塔，提馏段液汽比总是大于1，精馏段液汽比总是小于1。','answer': [{'value': 'A.对'}, {'value': 'B.错'}]},
        {id:23,'name': '23', 'question': '精馏设计时，采用相同的塔釜蒸发量，则冷液进料比热加料需要较少理论板数。','answer': [{'value': 'A.对'}, {'value': 'B.错'}]},
        {id:24,'name': '24', 'question': '最小回流比状态下的理论塔板数为最少理论塔板数。', 'answer': [{'value': 'A.对'}, {'value': 'B.错'}]},
        {id:25,'name': '25', 'question': '在理想的两组分溶液中，组分 A和 B的相对挥发度为1，则二者的混合溶液不能用普通精馏的方法分离。','answer': [{'value': 'A.对'}, {'value': 'B.错'}]},
        {id:26,'name': '26', 'question': '根据恒摩尔流假设，精馏塔内气、液两相的縻尔流量一定相等。', 'answer': [{'value': 'A.对'}, {'value': 'B.错'}]},
        {id:27,'name': '27', 'question': '精馏塔分为精馏段、加料板、 提馏段三个部分。','answer': [{'value': 'A.对'}, {'value': 'B.错'}]},    
        {id:28,'name': '28', 'question': '精馏塔中理论板实际上是不存在的。', 'answer': [{'value': 'A.对'}, {'value': 'B.错'}]},
        {id:29,'name': '29', 'question': '塔顶冷凝器中的冷凝液既可全部作为产品，也可部分回流至塔内。','answer': [{'value': 'A.对'}, {'value': 'B.错'}]},
        {id:30,'name': '30', 'question': '精馏塔的实际回流比都比最小回流比大。', 'answer': [{'value': 'A.对'}, {'value': 'B.错'}]},
        {id:31,'name': '31', 'question': '采用图解法与逐板法求理论塔板数的基本原理完全相同。', 'answer': [{'value': 'A.对'}, {'value': 'B.错'}]},
        {id:32,'name': '32', 'question': '在塔的操作中应先停再沸器再停进料。', 'answer': [{'value': 'A.对'}, {'value': 'B.错'}]},
        {id:33,'name': '33', 'question': '精馏的操作线为直线，主要是因为理论板假设。', 'answer': [{'value': 'A.对'}, {'value': 'B.错'}]},
        {id:34,'name': '34', 'question': '安装出口堰是为了保证气液两相在塔板上有充分的接触时间。', 'answer': [{'value': 'A.对'}, {'value': 'B.错'}]},
        {id:35,'name': '35', 'question': '板式塔内以塔板作为气液两相接触传质的基本条件。', 'answer': [{'value': 'A.对'}, {'value': 'B.错'}]},
        ]
      for (var i = 0; i < 4; ) { 
          const min = 0;
          const max = 19;
          let a = Math.floor(Math.random() * max)+min;
          if(!this.list_a.includes(this.list_b[a]))
          {
            i++;
            this.list_a.push(this.list_b[a]);
          }
      }
      for(var j = 0;j< 4;) {
          const min1=0;
          const max1=14;
          let b = Math.floor(Math.random() * max1)+min1;
          if(!this.list_a.includes(this.list_c[b]))
          {
            j++;
            this.list_a.push(this.list_c[b]);
          }
      }
    },
  },
};
</script>


<script setup>
import { ref } from "vue";
let router = require("vue-router").useRouter();
</script>

<style scoped>
</style>