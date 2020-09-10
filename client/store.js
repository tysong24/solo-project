import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";

// creating a store object to access
const store = createStore(reducers, composeWithDevTools());

// exporting the store
export default store;
