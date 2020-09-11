import * as types from "../constants/spendTypes.js";

const initialState = {
  date: "",
  description: "",
  amount: 0,
  type: "",
};

const spendFunctions = (state = initialState, action) => {
  // switch statement for the different reducers

  switch (action.type) {
    case types.ADD_SPEND:
      // update totalSpend and allSpend

      return {
        ...state,
        amount: action.payload,
      };

    case types.ADD_DATE:
      // update totalSpend and allSpend

      return {
        ...state,
        date: action.payload,
      };

    case types.ADD_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };

    case types.ADD_TYPE:
      return {
        ...state,
        type: action.payload,
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
