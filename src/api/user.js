import request from '@/utils/request'

export function login(data) {
    debugger
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}


export function getInfo() {
    debugger
    return request({
        url: '/user/info',
        method: 'get'
    })
}

















