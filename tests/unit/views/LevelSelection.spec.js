import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import LevelSelection from "../../../src/views/LevelSelection.vue";

Vue.use(Vuetify);

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Vuetify);

describe("LevelSelection.vue", () => {
  let actions;
  let getters;
  let store;

  let mockGetter = { test: "field" };

  beforeEach(() => {
    actions = {
      fetchLevel: jest.fn()
    };
    getters = {
      levelMap: () => mockGetter
    };
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  it("should call executeFetchLevel when clicking a button", () => {
    const wrapper = shallowMount(LevelSelection, {
      localVue,
      mocks: {
        $store: store
      }
    });
    wrapper.vm.executeFetchLevel = jest.fn();
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.executeFetchLevel).toHaveBeenCalled();
  });
});
