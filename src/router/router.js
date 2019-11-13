import Vue from "vue";
import VueRouter from 'vue-router'

import Blank from '@/views/blank.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const constantRoutes = [
    { path: "/", hidden: true, component: Blank },
    { path: "/layout", hidden: true, component: Home },

    { path: "/login", hidden: true, component: Login },

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
        path: '/dashboard',
        component: Home,
        name: '',   // 表示没有子菜单，必须有一个child
        iconCls: 'el-icon-s-data',
        children: [
            { path: '', component: Blank, name: '综合预览' }
        ]
    },
    {
        path: '/org',
        component: Home,
        name: '',   // 表示没有子菜单，必须有一个child
        iconCls: 'el-icon-menu',
        children: [
            { path: '', component: Blank, name: '组织结构' }
        ]
    },
    {
        path: '/employees',
        component: Home,
        name: '人员管理',
        iconCls: 'el-icon-user-solid',
        children: [
            { path: 'list', iconCls: 'el-icon-user', component: Blank, name: '员工列表' },
            { path: 'add', iconCls: 'el-icon-circle-plus-outline', component: Blank, name: '添加员工' }
        ]
    },
    {
        path: '/time',
        component: Home,
        name: '工作日历',
        iconCls: 'el-icon-date',
        children: [
            { path: 'leave', iconCls: 'el-icon-folder-delete', component: Blank, name: '请假调休' },
            { path: 'show', iconCls: 'el-icon-reading', component: Blank, name: '员工考勤' }
        ]
    },
    {
        path: '/benifit',
        component: Home,
        name: '薪酬福利',
        iconCls: 'el-icon-coin',
        children: [
            { path: 'shebao', iconCls: 'el-icon-goods', component: Blank, name: '社保' },
            { path: 'gjj', iconCls: 'el-icon-present', component: Blank, name: '公积金' }
        ]
    },
];

// 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes: constantRoutes
});


export default router
