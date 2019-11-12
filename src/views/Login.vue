<template>
<el-container>
    <div style="margin: auto;padding: 8%;">
        <el-card class="box-card">
            <div class="banner">系统登录</div>
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.name" suffix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-checkbox v-model="form.checked">记住密码</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width: 100%;" @click="onSubmit">提交</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</el-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: 'admin',
                password: 'passwd',
                checked: true
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
            this.$router.push('/layout');
        }
    }
}
</script>

<style>
.banner {
    text-align: center;
    width: 100%;
    margin-bottom: 12px;
    font-size: 18px;
}

.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.box-card {
    width: 480px;
}
</style>
