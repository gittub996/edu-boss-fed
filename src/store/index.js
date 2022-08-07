import Vue from 'vue'
import Vuex from 'vuex'
import { store as localStore } from '@/utils/store'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentUser: JSON.parse(localStore.get(localStore.constant.currentUser) || null)
    },
    mutations: {
        setCurrentUser(state, user) {
            state.currentUser = user;
            localStore.push(localStore.constant.currentUser, JSON.stringify(user))
        }
    },
    actions: {},
    modules: {}
})