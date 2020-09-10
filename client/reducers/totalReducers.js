import * as types from "../constants/totalTypes.js";

const initialState = {
  totals: 0,
  allTotal: 0,
};

const totalFunctions = (state = initialState, action) => {
  // switch statement for the different reducers
  let totals = 0;
  let allTotals = 0;

  switch (action.type) {
    case types.ADD_TOTALS:
      totals += action.payload;
      return {
        ...state,
        totals,
      };

    case types.ADD_ALLSPEND:
      allTotal += 1;
      return {
        ...state,
        allTotal,
      };

    case types.DELETE_TOTALS:
      totals -= action.payload;
      return {
        ...state,
        totals,
      };

    case types.DELETE_ALLSPEND:
      allTotal -= 1;
      return {
        ...state,
        allTotal,
      };

    default:
      return state;
  }
};

export default totalFunctions;
