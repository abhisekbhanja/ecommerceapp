
const showproductReducer = (state=[] , action) => {
  
    switch (action.type) {
     case "showproducts":
        return action.payload
  
      default:
        return state;
    }
  };



  export default showproductReducer;

