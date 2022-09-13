import { combineReducers } from "redux";
import cartReducer from "./amountReducer";
import userlogReducer from "./UserAuth";
import ShowuserReducer from "./ShowuserReducer"

const allreducers = combineReducers({
  mycart: cartReducer,
  user_authReducer:userlogReducer,
  ShowuserReducer:ShowuserReducer
});

export default allreducers;
