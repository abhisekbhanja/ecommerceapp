import axios from "axios";

const userlogReducer = async(state=" " , action) => {
    switch (action.type) {
      case "login":

      //console.log(action.loginData)
       try {
           const response=await axios.post(`${process.env.REACT_APP_SURL}/login`,action.loginData);
           
           if(response.status==200){
                // console.log(state);
                localStorage.setItem('loginusertoken',response.data.token)
                // console.log("login//////////")
                state= "login successfully"
                return state
            }
       } 
       catch (err) {
        if(err.response.status==401)
        { 
          
         state="invalid credentials"
         //console.log(state)
        return state
          //console.log('exist')
        }
        else{
         
          console.log('something is wrong try again')
         
        }
      }

      case "signup":
        // const response=await axios.post(`${process.env.REACT_APP_SURL}/register`,action.loginData);
        try {
          const response=await axios.post(`${process.env.REACT_APP_SURL}/register`,action.signupData);
          
          if(response.status==200){
            state= "true"
            return state
           }
      } 
      catch (err) {
       if(err.response.status==422)
       { 
         
        state="false"
        //console.log(state)
       return state
         //console.log('exist')
       }
       else{
        
         console.log('something is wrong try again')
        
       }
     }
        
        
  
      default:
        return state;
    }
  };



  export default userlogReducer;

