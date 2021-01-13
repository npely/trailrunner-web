import fetchMock from "fetch-mock";
import { mutations, getters, actions } from "../../../src/store";

describe("mutations", () => {
  const { levelMap, changedFields, moveDirection, hardcoreMode } = mutations;

  it("should set the levelMap", () => {
    const testLevelMap = { test: "map" };
    const state = { levelMap: {} };
    levelMap(state, testLevelMap);
    expect(state.levelMap).toBe(testLevelMap);
  });

  it("should set the changedFields", () => {
    const testChangedFields = { test: "fields" };
    const state = { changedFields: {} };
    changedFields(state, testChangedFields);
    expect(state.changedFields).toBe(testChangedFields);
  });

  it("should set the moveDirection", () => {
    const testMoveDirection = { test: "move direction" };
    const state = { moveDirection: {} };
    moveDirection(state, testMoveDirection);
    expect(state.moveDirection).toBe(testMoveDirection);
  });

  it("should set the hardcoreMode", () => {
    const testHardcoreMode = true;
    const state = { hardcoreMode: false };
    hardcoreMode(state, testHardcoreMode);
    expect(state.hardcoreMode).toBe(testHardcoreMode);
  });
});

describe("getters", () => {
  const { levelMap, changedFields, moveDirection, hardcoreMode } = getters;

  it("should retrieve the correct levelMap value", () => {
    const testLevelMap = { test: "map" };
    const state = { levelMap: testLevelMap };
    const result = levelMap(state);
    expect(result).toBe(testLevelMap);
  });

  it("should retrieve the correct changedFields value", () => {
    const testChangedFields = { test: "changed fields" };
    const state = { changedFields: testChangedFields };
    const result = changedFields(state);
    expect(result).toBe(testChangedFields);
  });

  it("should retrieve the correct moveDirection value", () => {
    const testMoveDirection = { test: "move direction" };
    const state = { moveDirection: testMoveDirection };
    const result = moveDirection(state);
    expect(result).toBe(testMoveDirection);
  });

  it("should retrieve the correct hardcoreMode value", () => {
    const testHardcoreMode = true;
    const state = { hardcoreMode: testHardcoreMode };
    const result = hardcoreMode(state);
    expect(result).toBe(testHardcoreMode);
  });
});

describe("actions", () => {
  const { fetchLevel, makeMove, switchHardcoreMode, postCustomGame } = actions;

  it("should set the level and retrieve the levelMap", async () => {
    fetchMock.mock(process.env.VUE_APP_BACKEND_BASE_URL + "/level/1", 200);
    fetchMock.mock(process.env.VUE_APP_BACKEND_BASE_URL + "/levelMap", {
      levelMap: "this is the levelMap"
    });
    const levelId = 1;
    const commit = jest.fn();

    await fetchLevel({ commit }, { levelId });

    expect(commit).toHaveBeenCalledWith("levelMap", {
      levelMap: "this is the levelMap"
    });
  });

  it("should make a move and retrieve the changedFields", async () => {
    fetchMock.mock(process.env.VUE_APP_BACKEND_BASE_URL + "/move/up", 200);
    fetchMock.mock(process.env.VUE_APP_BACKEND_BASE_URL + "/changedFields/up", {
      changedFields: "these are the changed fields"
    });
    const moveDirection = "up";
    const commit = jest.fn();

    await makeMove({ commit }, { moveDirection });

    expect(commit).toHaveBeenCalledWith("changedFields", {
      changedFields: "these are the changed fields"
    });
  });

  it("should switch the Hardcore Mode", async () => {
    fetchMock.mock(
      process.env.VUE_APP_BACKEND_BASE_URL + "/switchHardcoreMode",
      true
    );
    const commit = jest.fn();

    await switchHardcoreMode({ commit });

    expect(commit).toHaveBeenCalledWith("hardcoreMode", true);
  });

  it("should load the custom game", async () => {
    fetchMock.mock(process.env.VUE_APP_BACKEND_BASE_URL + "/loadCustomGame", {
      customGame: "this is the custom gameMap"
    });

    const commit = jest.fn();
    const level = { level: "this is the level" };

    await postCustomGame({ commit }, { level });

    expect(commit).toHaveBeenCalledWith("levelMap", level);
  });
});
