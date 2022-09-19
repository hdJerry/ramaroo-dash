import { createStore } from "vuex";

export default createStore({
  state: {
    chartData: {},
    loading: true,
  },
  getters: {
    data(state) {
      return state.chartData;
    },
    isLoading(state) {
      return state.loading;
    },
  },
  mutations: {
    UPDATE_CHART_DATA(state, data) {
      state.chartData = data;
      state.loading = false;
    },
  },
  actions: {
    fetchData({ commit }) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.json())
        .then((res) => commit("UPDATE_CHART_DATA", res));
    },
  },
  modules: {},
});
