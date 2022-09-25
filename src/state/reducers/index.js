import { combineReducers } from "redux";
import cartReducer from "./amountReducer";
import showproductReducer from "./showproductReducer";
import userlogReducer from "./UserAuth";


const allreducers = combineReducers({
  mycart: cartReducer,
  user_authReducer:userlogReducer,
  showproductReducer:showproductReducer
});

export default allreducers;
