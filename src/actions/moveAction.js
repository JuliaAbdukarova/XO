import { appStore } from "../store";

export const moveAction = (newCells) => {
  return {
    type: "move",
    payload: { cells: newCells, xIsNext: appStore.getState().xIsNext },
  };
};
