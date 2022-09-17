import axios from "axios";
import { USER_SINGUP_SUCCESS } from "../Constants/actionType";

const userlogReducer = (state=" " , action) => {
    switch (action.type) {
      // case "login":

      // //console.log(action.loginData)
      //  try {
      //      const response=await axios.post(`${process.env.REACT_APP_SURL}/login`,action.loginData);
           
      //      if(response.status==200){
      //           // console.log(state);
      //           localStorage.setItem('loginusertoken',response.data.token)
      //           // console.log("login//////////")
      //           state= "login successfully"
      //           return state
      //       }
      //  } 
      //  catch (err) {
      //   if(err.response.status==401)
      //   { 
          
      //    state="invalid credentials"
      //    //console.log(state)
      //   return state
      //     //console.log('exist')
      //   }
      //   else{
         
      //     console.log('something is wrong try again')
         
      //   }
      // }

      case USER_SINGUP_SUCCESS:
        console.log(action.payload);
        return state = "account create successfully"
        
        
  
      default:
        return state;
    }
  };



  export default userlogReducer;

