import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {//首页
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {//实验目的
        path: '/purpose',
        name: 'purpose',
        component: () => import('@/views/Purpose.vue'),
    },
    {//实验原理
        path: '/principle',
        name: 'principle',
        component: () => import('@/views/Principle.vue'),
    },
    {//实验习题
        path: '/problem',
        name: 'problem',
        component: () => import('@/views/Problem.vue'),
    },
    {//实验仿真
        path: '/simulation',
        name: 'simulation',
        component: () => import('@/views/Simulation.vue'),
    },
    {//数据处理
        path: '/processing',
        name: 'processing',
        component: () => import('@/views/Processing.vue'),
    },
    {//实验结果
        path: '/result',
        name: 'result',
        component: () => import('@/views/Result.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

let refresh = true;

router.beforeEach((to, from, next)=>{
    if(refresh){
        next('/');
        refresh = false;
    }
    else{
        next();
    }
})

export default router;
