import { combineReducers } from "redux";
import cartReducer from "./amountReducer";
import userlogReducer from "./UserAuth";


const allreducers = combineReducers({
  mycart: cartReducer,
  user_authReducer:userlogReducer
});

export default allreducers;
