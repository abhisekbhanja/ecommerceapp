import axios from "axios";

const userlogReducer = async(state=[] , action) => {
    switch (action.type) {
      case "show":
       console.log(action);
    
        console.log(state);
        
  
      default:
        return state;
    }
  };



  export default userlogReducer;

