// import the names for spend types
import * as types from "../constants/spendTypes";
import * as all from "../constants/totalTypes";

// export each functionality from spend types

// add
export const addSpend = (amount) => ({
  type: types.ADD_SPEND,
  payload: amount,
});

export const addDate = (date) => ({
  type: types.ADD_DATE,
  payload: date,
});

// delete
export const deleteSpend = (spend_id) => ({
  type: types.DELETE_SPEND,
  payload: spend_id,
});

export const addDescription = (description) => ({
  type: types.ADD_DESCRIPTION,
  payload: description,
});

export const addType = (type) => ({
  type: types.ADD_TYPE,
  payload: type,
});

export const addTotal = (amount) => ({
  type: all.ADD_TOTALS,
  payload: amount,
});

export const allSpend = () => ({
  type: all.ADD_ALLSPEND,
  payload: null,
});

export const deleteTotals = (amount) => ({
  type: all.DELETE_TOTALS,
  payload: amount,
});

export const deleteAllSpend = () => ({
  type: all.DELETE_ALLSPEND,
  payload: null,
});
