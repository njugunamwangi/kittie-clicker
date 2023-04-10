import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    kittenName: "",
    kittenUrl: "",
    kittens: [
      "https://placekitten.com/300/300",
      "https://placekitten.com/300/304",
      "https://placekitten.com/300/305",
    ],
  },
  getters: {},
  mutations: {
    updateKittenInfo(state, { field, value }) {
      state[field] = value;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
