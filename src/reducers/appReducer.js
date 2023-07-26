const initialState = { cells: Array(9).fill(null), xIsNext: true };

const action = { type: "move", payload: null };

export default function appReducer(state = initialState, action) {
  const { type, payload } = action;
  let newState = { ...payload };

  switch (type) {
    case "move":
      /*
      console.log("Это ход ->");
      console.log(payload);
      console.log(newState);
      console.log("Это ход <-");
      */
      newState.xIsNext = !payload.xIsNext;
      return newState;

    case "restart":
      console.log("Это рестарт!");
      newState.xIsNext = true;
      newState.cells = Array(9).fill(null);

      return newState;

    default:
      return state;
  }
}
