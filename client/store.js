import { createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools";
import reducers from "./reducers/index";

// creating a store object to access
const store = createStore(reducers, composeWithDevTools());

// exporting the store
export default store;
