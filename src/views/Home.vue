<template>
<el-container>
    <el-header>
        <el-container>
            <!--在header中显示logo-->
            <div class="logo" :class="isCollapse?'logo-collapse-width':'logo-width'">
                {{isCollapse?sysShortName:sysName}}
            </div>
            <el-container style="height: 60px;">
                <div class="collapse-btn" style="width: 10%;">
                    <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click.prevent="collapse"></i>
                </div>

                <!--在header中显示头像-->
                <div style="width: 90%; text-align: right; padding-right: 30px;height: 60px;display: flex; justify-content: flex-end;">
                    <div class="user-name">{{ userName }}</div>
                    <el-dropdown>
                        <el-avatar :size="50" src="" style="vertical-align:middle;">
                            <img :src="userAvatar" />
                        </el-avatar>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                            <el-dropdown-item>关于</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-container>
        </el-container>
    </el-header>
    <el-container>
        <!--侧边栏菜单-->
        <el-aside :width="isCollapse?'61px':'231px'">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :collapse-transition="isCollapseTransaction" :background-color="asideColor" router>
                <template v-for="(item,index) in allRoutes">

                    <!--不带子菜单-->
                    <template v-if="item.name===''">
                        <el-menu-item :index="item.path+item.children[0].path" :key="index+'-'">
                            <i :class="item.iconCls"></i>
                            <span slot="title">{{ item.children[0].name }}</span>
                        </el-menu-item>
                    </template>
                    <!--带有子菜单-->
                    <template v-else>
                        <el-submenu :index="index+'-'" :key="index+'-'">
                            <template slot="title">
                                <i :class="item.iconCls"></i>
                                <span slot="title">{{ item.name }}</span>
                            </template>
                            <template v-for="(child,subidx) in item.children">
                                <el-menu-item :index="item.path+'/'+child.path" :key="index+'-'+subidx">
                                    <i :class="child.iconCls"></i>
                                    <span slot="title">{{ child.name }}</span>
                                </el-menu-item>
                            </template>

                        </el-submenu>
                    </template>
                </template>

            </el-menu>
        </el-aside>
        <!--主要内容-->
        <el-main>
            <!-- 面包屑导航 -->
            <!-- 主内容 -->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </el-main>
    </el-container>
</el-container>
</template>

<script>
import {
    getCookieUser,
    removeCookieUser
} from '@/utils/util'

export default {
    data() {
        return {
            isCollapse: false,
            isCollapseTransaction: false,
            asideColor: '#EBEEF5',
            sysName: 'OCSL',
            sysShortName: 'OC',
            userAvatar: require('../assets/user.jpeg'),
            userName: getCookieUser().name
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        //折叠导航栏
        collapse: function () {
            this.isCollapse = !this.isCollapse;
        },
        logout: function () {
            removeCookieUser();
            this.$router.push('/login');
        }
    },
    computed: {
        allRoutes: function () {
            return this.$router.options.routes.filter(item => !item.hidden);
        }
    }
}
</script>

<style>
.el-header,
.el-footer {
    background-color: #20a0ff;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding-left: 0px;
    padding-right: 0px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 230px;
}

.el-menu-item {
    height: 50px;
}

.el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 600px;
}

.el-menu-vertical-demo {
    width: 60px;
    min-height: 600px;
}

.logo {
    height: 60px;
    font-size: 22px;
    border-color: rgba(238, 241, 146, 0.3);
    border-right-width: 1px;
    border-right-style: solid;
    color: #ffffff;
    text-align: center;
}

.logo-width {
    width: 230px;
}

.logo-collapse-width {
    width: 60px;
}

.collapse-btn {
    text-align: left;
    color: #ffffff;
    font-size: 20px;
    padding-left: 10px;
}

.user-name {
    color: #ffffff;
    font-size: 18px;
    padding-right: 10px;
    margin-top: 10px;
}
</style>
