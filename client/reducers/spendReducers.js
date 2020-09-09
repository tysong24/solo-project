import * as types from "../constants/spendTypes.js";

const initialState = {
  id: 0,
  description: "",
  amount: 0,
  type: "",
};

const spendFunctions = (state = initialState, action) => {
  // switch statement for the different reducers
  switch (action.type) {
    case types.ADD_SPEND:
      return Object.assign({}, state, {
        // id
        // description
        // amount
        // type
      });

    case types.UPDATE_SPEND:
      return Object.assign({}, state, {
        // id
        // description
        // amount
        // type
      });
  }
};

export default spendFunctions;
