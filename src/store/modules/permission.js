
import { asyncRoutes, constRoutes } from '@/router'

function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
    } else {
        return true
    }
}

export function filterAsyncRoutes(routes, roles) {
    const res = [];

    routes.forEach(route => {
        const tmp = { ...route }
        if (hasPermission(roles, tmp)) {

        }
    })
}


const state = {
    routes: [],     // 完整路由表
    addRoutes: []   // 用户可访问路由表
}

const mutations = {
    SET_ROUTES: (state, routes) =>{
        state.addRoutes = routes;
        state.routes = constRoutes.concat(routes);
    }
}

const actions = {
    // 路由生成：在得到用户角色后会第一时间调用
    generateRoutes({ commit }, roles) {
        return new Promise(resolve =>{
            let accessedRoutes;
            // 用户是管理员则拥有完整访问权限
            if (roles.includes('admin')) {
                accessedRoutes = asyncRoutes || [];
            } else {
                accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
            }
            commit('SET_ROUTES', accessedRoutes);
            resolve(accessedRoutes);
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}














