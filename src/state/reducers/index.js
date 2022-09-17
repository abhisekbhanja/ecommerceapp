import { combineReducers } from "redux";
import cartReducer from "./amountReducer";
import userlogReducer from "./UserAuth";
import { userReducer } from "./userReducer";


const allreducers = combineReducers({
  mycart: cartReducer,
  user_authReducer:userlogReducer,
  userReducer:userReducer
});

export default allreducers;
