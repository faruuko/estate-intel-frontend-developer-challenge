import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../api/build-client';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
  },
  mutations: {
    SET_PROJECTS: (state, data) => {
      state.projects = data;
    },
  },
  actions: {
    FETCH_PROJECTS: (state) => {
      Api.get('').then((response) => state.commit('SET_PROJECTS', response.data));
    },
  },
  getters: {
    GET_PROJECTS: (state) => state.projects.data,
  },
});
