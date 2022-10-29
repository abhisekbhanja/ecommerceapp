import { GET_CATEGORY } from "../Constants/actionType";

const showproductReducer = (state=[] , action) => {
  
    switch (action.type) {
     case "showproducts":
        return {...state,allproducts:action.payload,products:action.payload}
     case GET_CATEGORY:
      console.log(action.payload.allproducts);
      return {...state,products:action.payload.allproducts}
      case "pid":
        return {...state,product_details:action.payload.data}
      default:
        return state;
    }
  };



  export default showproductReducer;

