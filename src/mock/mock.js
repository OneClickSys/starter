import Mock from 'mockjs';//es6语法引入mock模块
import { login } from './login'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
    timeout: 20
})

Mock.mock('/login', login);


export default Mock

