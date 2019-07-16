import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router);

// 通用页面
export const constRoutes = [
    {
        path: "/login",
        component: () => import("@/views/Login"),
        hidden: true   //导航菜单忽略该项
    },
    {
        path: "/",
        component: Layout,
        redirect: "/home",
        children: [
            {
                path: 'home',
                component: () => import(/* webpackChunName: 'home' */ "@/views/Home.vue"),
                name: 'home',
                meta: {
                    title: "Home",
                    icon: 'qq'
                }
            }
        ]
    }
]

export const asyncRoutes = [
    {
        path: "/about",
        component: Layout,
        redirect: '/about/index',
        children: [
            {
                path: 'index',
                component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
                name: "about",
                meta: {
                    title: "About",
                    icon: 'qq',
                    roles: ['admin']
                }
            }
        ]
    }
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constRoutes
})




















