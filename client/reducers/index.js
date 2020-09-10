// importing combiner from redux
import { combineReducers } from "redux";

// importing the reducers from spend
import spendFunction from "./spendReducers.js";
import totalFunctions from "./totalReducers.js";

// combining the reducers
const reducers = combineReducers({
  spend: spendFunction,
  total: totalFunctions,
});

// exporting the combined reducers
export default reducers;
