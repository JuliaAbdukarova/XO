const initialState = { cells: Array(9).fill(null), xIsNext: true };

//const action = { type: "move", payload: null };

export  function appReducer(state = initialState, action) {
  const { type, payload } = action;

  //console.log("old cells" )
  //console.log( state.cells)
    
  let newState = { ...payload };
  console.log("NEW cells" )
  console.log( newState.cells)

  switch (type) {
    case "move":
      //console.log("Это ход!");
      newState.xIsNext = !payload.xIsNext;
      return newState;

    case "restart":
      //console.log("Это рестарт!");
      newState.xIsNext = true;
      newState.cells = Array(9).fill(null);
      //console.log( newState.cells)
      return newState;

    default:
      //console.log("default cells" )
      //console.log( state.cells)
      return state;
  }
}
