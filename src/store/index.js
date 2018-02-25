/**
 * Created by Stanislav Gulevich on 27.11.2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'

Vue.use(Vuex)

// main Store
export default new Vuex.Store({
  state: {
    mode: 0,
    showAuthPopup: false,
    showGoogleAuth: false,
    globalAuthorise: false,
    support: false,
    deposit: false,
    output: false
  },
  // mutations.js
  mutations
})
