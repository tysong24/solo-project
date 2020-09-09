// importing combiner from redux
import { combineReducers } from "redux";

// importing the reducers from spend
import spendFunction from "./spendReducers.js";

// combining the reducers
const reducers = combineReducers({
  spend: spendFunction,
});

// exporting the combined reducers
export default reducers;
