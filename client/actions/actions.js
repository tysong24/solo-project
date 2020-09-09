// import the names for spend types
import * as types from "../constants/spendTypes";

// export each functionality from spend types

// add
export const addSpend = (spend_id) => ({
  type: types.ADD_SPEND,
  payload: spend_id,
});

// update
export const updateSpend = (spend_id) => ({
  type: types.UPDATE_SPEND,
  payload: spend_id,
});

// delete
export const deleteSpend = (spend_id) => ({
  type: types.DELETE_SPEND,
  payload: spend_id,
});
