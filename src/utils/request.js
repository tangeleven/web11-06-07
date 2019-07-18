import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url 基础地址，解决不同数据源url变化问题
    withCredentials: true,  // 跨域时若要发送cookie需要设置该选项
    timeout: 5000  // 超时
})

// 请求拦截
service.interceptors.request.use(
    config => {

        if (store.getters.token) {
            // 设置令牌请求头
            config.headers['X-Token'] = getToken();
        }

        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    // 通过自定义code判定响应状态，也可以通过HTTP状态码判定
    response => {
        // 仅返回数据部分
        const res = response.data;

        // code 不为1则判定为一个错误
        if (res.code !== 1) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })

            // 假设： 10008-非法令牌；10012-其他客户端已登录；10014-令牌过期；
            if (res.code === 10008 || res.code === 10012 || res.code === 10014) {
                MessageBox.confirm(
                    "登录状态异常，请重新登录",
                    "确认登录信息",
                    {
                        confirmButtonText: "重新登录",
                        cancelButtonText: "取消",
                        type: "warning"
                    }
                ).then(() => {
                    store.dispatch("user/resetToken").then(() => {
                        location.reload();
                    })
                })
            }
        } else {
            return res;
        }
    },
    error => {
        Message({
            message: error.message,
            type: "error",
            duration: 5 * 1000
        });

        return Promise.reject(error)
    }
)




export default service

