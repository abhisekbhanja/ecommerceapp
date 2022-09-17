import { GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "../action-creator/constants/userconstans";

export const userReducer = (state = { users: {} }, action) => {
    switch (action.type) {
      case GET_USERS_REQUEST:
        return { loading: true, users: {} };
  
      case GET_USERS_SUCCESS:
        // console.log(">>>>>>>");
        // console.log(action.payload.data._id);
          return { loading: false, users: action.payload.data.firstname};
      
  
      case GET_USERS_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  