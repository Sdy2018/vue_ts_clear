import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function test <T>(name:T):T{
  return name
}


export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
