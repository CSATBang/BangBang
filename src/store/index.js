import { createStore } from 'vuex';

let store = createStore({
    state: {
        //题目集合
        topics: [],
        //显示实验
        showEXP: false,
        //显示“数据处理”
        showData: false,
        //显示结果
        showResult: false,
        //得分
        score: 0,
    },
    getters: {
        GetRandomTopic: state => function () {
            let index = [];
            for (let i = 0; i < 8; i++) {
                let max = i < 4 ? 20 : 35;
                let min = i < 4 ? 0 : 20;
                //不包括最大值
                let v = Math.floor(Math.random() * (max - min) + min);
                //包含则返回true
                while (index.includes(v)) {
                    v = Math.floor(Math.random() * (max - min) + min);
                }
                index.push(v);
            }
            return index.map(i => {
                let topic = state.topics[i];
                topic.select = '';
                return topic;
            });
        }
    },
    mutations: {
        setShowEXP(state, bShow) {
            state.showEXP = bShow;
        },
        setShowData(state, bShow) {
            state.showData = bShow;
        },
        setShowResult(state, bShow) {
            state.showResult = bShow;
        },
        setScore(state, score){
            state.score = score;
        },
    },
    actions: {},
    modules: {}
});
/*
 * choice 选择题
 * judgment 判断题
 */
store.state.topics = [
    {type: 'choice', question: '精馏塔设计时，若F、xF、xD、xw、V均为定值，将进料热状态从q=1变为q>1，则设计所需理论板数(  )。', answer: ['A.多', 'B.少', 'C.不变', 'D.无法判断'], right: 'B.少'},
    {type: 'choice', question: '精馏操作时，若F、D、XF、q、加料板位置、R都不变，而将塔顶泡点回流改为冷回流，则塔顶产品组成xD的变化为(  )', answer: ['A.变小', 'B.变大', 'C.不变', 'D.不确定'], right: 'B.变大'},
    {type: 'choice', question: '在常压下苯的沸点为80.1℃，环己烷的沸点为80.73℃，为使这两组份的混合液能得到分离，可采用(  )分离方法。', answer: ['A.恒沸精馏', 'B.普通精馏', 'C.萃取精馏', 'D.水蒸汽直接加热精馏'], right: 'C.萃取精馏'},
    {type: 'choice', question: '精馏塔设计时采用的参数F、x F、q、D、xD、R均为定值，若降低塔顶回流液的温度，则所需理论板数(  )', answer: ['A.增大', 'B.减小', 'C.不变', 'D.不确定'], right: 'B.减小'},
    {type: 'choice', question: '某精馏塔的设计任务为:原料为F、xF，塔顶为xD，塔底为xW，若塔釜上升蒸汽量V’不变，加料热状态由原来的饱和蒸汽改为饱和液体，则所需理论板NT()', answer: ['A.增加', 'B.减少', 'C.不变', 'D.不确定'], right: 'A.增加'},
    {type: 'choice', question: '在连续蒸馏操作中，若F、xF、q不变，仅加大回流比时，则可以使塔顶产品浓度xD(  )', answer: ['A.变大', 'B.变小', 'C.不变', 'D.不确定'], right: 'A.变大'},
    {type: 'choice', question: '精馏塔引入回流，使下降的液流与上升的汽流发生传质，并使上升汽相中的易挥发组分浓度提高，最恰当的说法是由于', answer: ['A.液相中易挥发组分进入汽相', 'B.汽相中难挥发组分进入液相', 'C.液相中易挥发组分和难挥发组分同时进入汽相，但其中易挥发组分较多', 'D.液相中易挥发组分进入汽相和汽相中难挥发组分进入液相的现象同时发生'], right: 'D.液相中易挥发组分进入汽相和汽相中难挥发组分进入液相的现象同时发生'},
    {type: 'choice', question: '被分离物系最小回流比Rmin的数值与(  )无关。', answer: ['A.被分离物系的汽液平衡关系', 'B.塔顶产品组成', 'C.进料组成和进料状态', 'D.塔底产品组成'], right: 'D.塔底产品组成'},
    {type: 'choice', question: '维持精馏塔F、q、xD及进料位置不变，减小xF，则有(  )。', answer: ['A.D增大，R减小', 'B.D不变，R增加', 'C.D减小，R增加', 'D.D减小，R不变'], right: 'C.D减小，R增加'},
    {type: 'choice', question: '精馏塔在一定条件下操作时，将加料口向上移动两层塔板，此时塔顶产品浓度xD将(  )。', answer: ['A.变大', 'B.变小', 'C.不变', 'D.不确定'], right: 'B.变小'},
    {type: 'choice', question: '精馏塔在操作过程中，若进料量F适当增加，而进料组成，热状况q、回流比R、塔顶馏出物D均不变，则塔釜组成xW将(  )。', answer: ['A.变大', 'B.变小', 'C.不变', 'D.不确定'], right: 'A.变大'},
    {type: 'choice', question: '操作中的精馏塔，保持F、xF、q、 不变，减少D，则塔顶易挥发组分回收率( )。', answer: ['A.变大', 'B.变小', 'C.不变', 'D.不确定'], right: 'B.变小'},
    {type: 'choice', question: '精馏操作时，若F、xF、q、R均不变，将塔顶产品量D增加，则(  )。', answer: ['A.xD下降，xW下降', 'B.xD下降，xW上升', 'C.xD下降，xW不变', 'D.xD不变，xW下降'], right: 'A.xD下降，xW下降'},
    {type: 'choice', question: '二元溶液连续精馏计算中，进料热状态的变化将引起以下(  )线的变化。', answer: ['A.平衡线', 'B.操作线与ｑ线', 'C.平衡线与操作线', 'D.平衡线与ｑ线'], right: 'B.操作线与ｑ线'},
    {type: 'choice', question: '两组分物系的相对挥发度越小，则表示分离该物系越(  )。', answer: ['A.容易', 'B.困难', 'C.完全', 'D.不完全'], right: 'B.困难'},
    {type: 'choice', question: '精馏操作中，回流比越大，分离效果( )。', answer: ['A.越好', 'B.越差', 'C.没变化', 'D.难确定'], right: 'A.越好'},
    {type: 'choice', question: '对理论板的叙述错误的是(  )。', answer: ['A.板上气液两相呈平衡状态', 'B.实际上不可能存在', 'C.是衡量实际塔板分离效率的一个标准', 'D.比实际塔板数多'], right: 'D.比实际塔板数多'},
    {type: 'choice', question: '塔板上造成雾沫夹带的原因是(  )。', answer: ['A.气速过大', 'B.气速过小', 'C.液流量过大', 'D.液流量过小'], right: 'A.气速过大'},
    {type: 'choice', question: '增大精馏塔塔顶冷凝器中的冷却水量，可以( )塔顶压力。', answer: ['A.降低', 'B.提高 ', 'C.不改变 '], right: 'A.降低'},
    {type: 'choice', question: '精馏过程的理论板假设是指(  )。', answer: ['A.进入该板的气液两相组成相等', 'B.进入该板的气液两相组成平衡', 'C.离开该板的气液两相组成相等', 'D.离开该板的气液两相组成平衡'], right: 'D.离开该板的气液两相组成平衡'},
    {type: 'judgment', question: '精馏段操作线方程为:y=0.75x+0.3，这种情况不可能出现。', answer: ['A.对', 'B.错'], right: 'A.对'},
    {type: 'judgment', question: '连续稳定进料操作的精馏塔，提馏段液汽比总是大于1，精馏段液汽比总是小于1。', answer: ['A.对', 'B.错'], right: 'A.对'},
    {type: 'judgment', question: '精馏设计时，采用相同的塔釜蒸发量，则冷液进料比热加料需要较少理论板数。', answer: ['A.对', 'B.错'], right: 'B.错'},
    {type: 'judgment', question: '最小回流比状态下的理论塔板数为最少理论塔板数。', answer: ['A.对', 'B.错'], right: 'B.错'},
    {type: 'judgment', question: '在理想的两组分溶液中，组分 A和 B的相对挥发度为1，则二者的混合溶液不能用普通精馏的方法分离。', answer: ['A.对', 'B.错'], right: 'A.对'},
    {type: 'judgment', question: '根据恒摩尔流假设，精馏塔内气、液两相的縻尔流量一定相等。', answer: ['A.对', 'B.错'], right: 'B.错'},
    {type: 'judgment', question: '精馏塔分为精馏段、加料板、 提馏段三个部分。', answer: ['A.对', 'B.错'], right: 'B.错'},
    {type: 'judgment', question: '精馏塔中理论板实际上是不存在的。', answer: ['A.对', 'B.错'], right: 'A.对'},
    {type: 'judgment', question: '塔顶冷凝器中的冷凝液既可全部作为产品，也可部分回流至塔内。', answer: ['A.对', 'B.错'], right: 'A.对'},
    {type: 'judgment', question: '精馏塔的实际回流比都比最小回流比大。', answer: ['A.对', 'B.错'], right: 'A.对'},
    {type: 'judgment', question: '采用图解法与逐板法求理论塔板数的基本原理完全相同。', answer: ['A.对', 'B.错'], right: 'A.对'},
    {type: 'judgment', question: '在塔的操作中应先停再沸器再停进料。', answer: ['A.对', 'B.错'], right: 'B.错'},
    {type: 'judgment', question: '精馏的操作线为直线，主要是因为理论板假设。', answer: ['A.对', 'B.错'], right: 'B.错'},
    {type: 'judgment', question: '安装出口堰是为了保证气液两相在塔板上有充分的接触时间。', answer: ['A.对', 'B.错'], right: 'A.对'},
    {type: 'judgment', question: '板式塔内以塔板作为气液两相接触传质的基本条件。', answer: ['A.对', 'B.错'], right: 'A.对'},
];

for (let topic of store.state.topics) {
    topic.select = '';
}

export default store;