export const collectProductsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DB":
      state = action.products; // state === [{},{}...]
      return state;
    default:
      return state;
  }
};
