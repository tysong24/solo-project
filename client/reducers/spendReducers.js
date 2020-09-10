import * as types from "../constants/spendTypes.js";

const initialState = {
  id: 0,
  description: "",
  amount: 0,
  type: "",
  totalSpend: 0,
  allSpend: 0,
};

const spendFunctions = (state = initialState, action) => {
  // switch statement for the different reducers
  switch (action.type) {
    case types.ADD_SPEND:
      // update totalSpend and allSpend
      allSpend += 1;
      return {
        ...state,
        totalSpend,
        allSpend, // etc
      };

    case types.UPDATE_SPEND:
      // update totalSpend and allSpend
      return {
        ...state,
        totalSpend,
        allSpend, // etc
      };

    case types.DELETE_SPEND:
      // update totalSpend and allSpend
      return {
        ...state,
        totalSpend,
        allSpend, // etc
      };

    default:
      return state;
  }
};

export default spendFunctions;
