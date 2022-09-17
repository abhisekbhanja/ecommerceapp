import axios from "axios";

const userlogReducer = (state="" , action) => {
    switch (action.type) {
      case "login":

        

    //   case "signup":
    //     // const response=await axios.post(`${process.env.REACT_APP_SURL}/register`,action.loginData);
    //     try {
    //       const response=await axios.post(`${process.env.REACT_APP_SURL}/register`,action.signupData);
          
    //       if(response.status==200){
    //         state= "true"
    //         return state
    //        }
    //   } 
    //   catch (err) {
    //    if(err.response.status==422)
    //    { 
         
    //     state="false"
    //     //console.log(state)
    //    return state
    //      //console.log('exist')
    //    }
    //    else{
        
    //      console.log('something is wrong try again')
        
    //    }
    //  }
      
     case "loaduser":
   
        // console.log({...state,payload:action.payload});
        // console.log("////////////////////////////////");
      return action.payload
      
      case "showuser":
        //console.log({...state,payload:action.payload});
        return {...state,
          users: action.payload,  
        }
  
      default:
        return state;
    }
  };



  export default userlogReducer;

