import Mock from 'mockjs';//es6语法引入mock模块
import { getUserInfo } from './login'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
    timeout: 20
})

Mock.mock('/get_info', getUserInfo)


export default Mock

