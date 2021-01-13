import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = {
  levelMap: {},
  changedFields: {},
  moveDirection: {},
  hardcoreMode: false
};

export const getters = {
  levelMap: currentState => {
    return currentState.levelMap;
  },
  changedFields: currentState => {
    return currentState.changedFields;
  },
  moveDirection: currentState => {
    return currentState.moveDirection;
  },
  hardcoreMode: currentState => {
    return currentState.hardcoreMode;
  }
};

export const mutations = {
  levelMap(state, levelMap) {
    state.levelMap = levelMap;
  },
  changedFields(state, changedFields) {
    state.changedFields = changedFields;
  },
  moveDirection(state, moveDirection) {
    state.moveDirection = moveDirection;
  },
  hardcoreMode(state, hardcoreMode) {
    state.hardcoreMode = hardcoreMode;
  }
};

export const actions = {
  async fetchLevel({ commit }, { levelId }) {
    await fetch(process.env.VUE_APP_BACKEND_BASE_URL + "/level/" + levelId, {
      method: "GET",
      credentials: "same-origin"
    });
    await fetch(process.env.VUE_APP_BACKEND_BASE_URL + "/levelMap", {
      method: "GET",
      credentials: "same-origin"
    }).then(async function(response) {
      const levelMap = await response.json();
      commit("levelMap", levelMap);
    });
  },
  async makeMove({ commit }, { moveDirection }) {
    await fetch(
      process.env.VUE_APP_BACKEND_BASE_URL + "/move/" + moveDirection,
      {
        method: "GET",
        credentials: "same-origin"
      }
    );
    await fetch(
      process.env.VUE_APP_BACKEND_BASE_URL + "/changedFields/" + moveDirection,
      {
        method: "GET",
        credentials: "same-origin"
      }
    ).then(async function(response) {
      const changedFields = await response.json();
      commit("moveDirection", moveDirection);
      commit("changedFields", changedFields);
    });
  },
  async switchHardcoreMode({ commit }) {
    await fetch(process.env.VUE_APP_BACKEND_BASE_URL + "/switchHardcoreMode", {
      method: "GET",
      credentials: "same-origin"
    }).then(async function(response) {
      const hardcoreMode = await response.json();
      commit("hardcoreMode", hardcoreMode);
    });
  },
  async saveGame() {
    await fetch(process.env.VUE_APP_BACKEND_BASE_URL + "/save", {
      method: "GET",
      credentials: "same-origin"
    });
  },
  async loadGame() {
    await fetch(process.env.VUE_APP_BACKEND_BASE_URL + "/load", {
      method: "GET",
      credentials: "same-origin"
    });
  },
  async postCustomGame({ commit }, { level }) {
    await fetch(process.env.VUE_APP_BACKEND_BASE_URL + "/loadCustomGame", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(level)
    }).then(async function() {
      commit("levelMap", level);
      console.log("finished");
      console.log(level);
    });
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
