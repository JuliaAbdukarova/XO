const initialState = Array(9).fill(null);

const action = { type: "move", payload: null };

export default function appReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "move":
      console.log("Это ход!");
      return payload;

    case "restart":
      console.log("Это рестарт!");
      return Array(9).fill(null);

    default:
      return state;
  }
}
