import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import allreducers from './state/reducers/index';



const intialState = {};

const middleware = [thunk];

const store = createStore(
  allreducers,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
