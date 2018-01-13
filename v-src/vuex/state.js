import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters.js'
import * as actions from './actions.js'
import * as mutations from './mutations.js'

Vue.use(Vuex)

const state = {
  // 应用启动时， count置为0
  count: 0
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以链接到我们的应用中
export default new Vuex.Store({
  state,
  getters,
  actions, 
  mutations  
})