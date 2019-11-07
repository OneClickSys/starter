import Vue from "vue";
import VueRouter from 'vue-router'

import Blank from '../views/blank.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const constantRoutes = [
    { path: "/", hidden: true, component: Blank },
    { path: "/layout", hidden: true, component: Home },

    {
        path: '/',
        component: Home,
        name: '嵌套菜单',
        iconCls: 'el-icon-location',
        children: [
            { path: 'page4', iconCls: 'el-icon-s-custom', component: Blank, name: '子菜单1' },
            { path: 'page5', iconCls: 'el-icon-s-custom', component: Blank, name: '子菜单2' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',   // 表示没有子菜单，必须有一个child
        iconCls: 'el-icon-document',
        children: [
            { path: 'page6', component: Blank, name: '单一导航' }
        ]
    },
];

// 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes: constantRoutes
});


export default router
