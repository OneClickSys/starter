import Vue from "vue";
import VueRouter from 'vue-router'

import Blank from '../views/blank.vue'
import Home from '../views/Home.vue'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const constantRoutes = [
    { path: "/", hidden: true, component: Blank },
    { path: "/layout", hidden: true, component: Home },

    {
        path: '/',
        component: Home,
        name: '嵌套菜单',
        hidden: true,
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
        hidden: true,
        iconCls: 'el-icon-document',
        children: [
            { path: 'page6', component: Blank, name: '单一导航' }
        ]
    },

    // 项目导航菜单
    {
        path: '/',
        component: Home,
        name: '',   // 表示没有子菜单，必须有一个child
        iconCls: 'el-icon-user',
        children: [
            { path: 'employeelist', component: Blank, name: '员工列表' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',   // 表示没有子菜单，必须有一个child
        iconCls: 'el-icon-circle-plus-outline',
        children: [
            { path: 'addemployee', component: Blank, name: '添加员工' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',   // 表示没有子菜单，必须有一个child
        iconCls: 'el-icon-date',
        children: [
            { path: 'employeedate', component: Blank, name: '员工考勤' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',   // 表示没有子菜单，必须有一个child
        iconCls: 'el-icon-coin',
        children: [
            { path: 'compensation', component: Blank, name: '员工工资' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',   // 表示没有子菜单，必须有一个child
        iconCls: 'el-icon-pie-chart',
        children: [
            { path: 'compensation', component: Blank, name: '社保福利' }
        ]
    },
];

// 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes: constantRoutes
});


export default router
