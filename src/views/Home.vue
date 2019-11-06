<template>
<el-container>
    <el-header>
        <el-row>
            <!--在header中显示logo-->
            <el-col :span="8" class="logo" :class="isCollapse?'logo-collapse-width':'logo-width'">
                {{isCollapse?sysShortName:sysName}}
            </el-col>

            <el-col :span="8" class="collapse-btn">
                <i class="el-icon-s-operation" @click.prevent="collapse"></i>
            </el-col>

            <!--在header中显示头像-->
            <el-col :span="8" style="background-color: red;">
                <div>AAA</div>
            </el-col>
        </el-row>
    </el-header>
    <el-container>
        <el-aside :width="isCollapse?'61px':'231px'">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                    </template>
                    <el-menu-item-group>
                        <span slot="title">分组一</span>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>Main</el-main>
    </el-container>
</el-container>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false,
            sysName: 'OCSL',
            sysShortName: 'OC',
            avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
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

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 500px;
}

.el-menu-vertical-demo {
    width: 60px;
    min-height: 500px;
}

.logo {
    height: 60px;
    font-size: 22px;
    padding-left: 20px;
    padding-right: 20px;
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
    font-size: 22px;
    padding-left: 10px;
}

</style>
