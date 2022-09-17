import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import allreducers from "./reducers";



// const intialState = {users:{}};
// console.log("'''''''''''''''''''''''''''");
// console.log(intialState);

const middleware = [thunk];

const store = createStore(
  allreducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
