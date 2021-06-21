import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import(/* webpackChunkName: "views.basic" */ '../views/Basic.vue')
        },
        {
            path: '/typing',
            name: 'Typing',
            component: () => import(/* webpackChunkName: "views.typing" */ '../views/Typing.vue')
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import(/* webpackChunkName: "views.home" */ '../views/Home.vue')
        },
        {
            path: '/me',
            name: 'Me',
            component: () => import(/* webpackChunkName: "views.me" */ '../views/Me.vue')
        }
    ]
})

export default router;
