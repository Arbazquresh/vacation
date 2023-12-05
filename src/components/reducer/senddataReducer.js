export const senddataReducer = (state = { alldata: [] }, action) => {
  switch (action.type) {
    case "ADD-DATA":
      return {
        ...state,
        alldata: [...state.alldata, action.payload],
      };
      return state;
  }
  return state;
};
