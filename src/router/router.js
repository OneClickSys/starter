import Vue from "vue";
import VueRouter from 'vue-router'

import Blank from '../views/blank.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const constantRoutes = [
    { path: "/", component: Blank },
    {path: "/layout", component: Home}
];

// 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes: constantRoutes
});


export default router
