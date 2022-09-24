
import { EXIST_USER, SHOW_USER_PROFILE, USERLOGIN_FAILED, USER_LOGIN, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, } from "../Constants/actionType";

const userlogReducer = (state=" " , action) => {
  
    switch (action.type) {
      case USER_LOGIN:
        return state={msg:action.payload,success:true}
      
      case USERLOGIN_FAILED:
        return state={loginmsg:action.payload}

      case USER_SIGNUP_REQUEST:
        return state = {loading:true}

      case USER_SIGNUP_SUCCESS:
        return state = {msg:"account create successfully",status:true,loading:false}
      case EXIST_USER:
        return state={errmsg:action.payload,loading:false} 
      
        case SHOW_USER_PROFILE:
          const token=localStorage.getItem("loginusertoken")
          if(token==null){
            return state=" "
          }
          else{
            return state=action.payload
          }
  
      default:
        return state;
    }
  };



  export default userlogReducer;

