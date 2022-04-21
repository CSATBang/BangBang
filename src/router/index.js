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
        path: '/principle',
        name: 'principle',
        component: () => import('@/views/Principle.vue'),
    },
    {
        path: '/simulation',
        name: 'simulation',
        component: () => import('@/views/Simulation.vue'),
    },
    {
        path: '/dispose',
        name: 'dispose',
        component: () => import('@/views/Dispose.vue'),
    },
    {
        path: '/exercises',
        name: 'exercises',
        component: () => import('@/views/Exercises.vue'),
    },
    {
        path: '/result',
        name: 'result',
        component: () => import('@/views/Result.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;
