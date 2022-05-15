import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/purpose',
        name: 'purpose',
        component: () => import('@/views/Purpose.vue'),
    },
    {
        path:'/principle',
        name:'princeple',
        component: () => import('@/views/Principle.vue'),
    },
    {
        path:'/problem',
        name:'problem',
        component: () => import('@/views/Problem.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;