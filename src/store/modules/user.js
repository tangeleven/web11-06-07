
import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getInfo } from '@/api/user'

const state = {
    token: getToken,
    roles: []
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}


const actions = {
    login({ commit }, userInfo) {
        const { username } = userInfo;
        debugger
        // 调用并处理结果，错误处理已拦截无需处理
        return login(userInfo).then(res => {
            commit('SET_TOKEN', res.data)
            setToken(res.data)
            debugger
        })
      
        /* return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'admin' || username === 'jerry') {
              
                    commit('SET_TOKEN', username)
                    setToken(username)
                    resolve();
                } else {
                    reject('用户名, 密码错误')
                }
               
            }, 1000)
        }) */
    },
    getInfo({ commit, state }) {
        debugger
        return getInfo(state.token).then(({ data: roles }) => {
            commit('SET_ROLES', roles);

            debugger
            return { roles }
        })

        /* return new Promise((resolve) => {
            setTimeout(() => {
                const roles = state.token === 'admin' ? ['admin'] : ['editor']
                commit('SET_ROLES', roles)
                resolve({roles})
            })
        }) */
    },
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '');
            commit('SET_ROLES', []);
            removeToken();
            resolve();
        })
    }
}

export default  {
    namespaced: true,
    state,
    mutations,
    actions
}


















