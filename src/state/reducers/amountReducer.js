import axios from "axios";
import useMyhook from "../../components/useMyhook";

const cartReducer = async(state = [], action) => {
  switch (action.type) {
    case "add":
    const cartdata={
      email:action.email,
      id:action.id,
      image:action.image,
      price:action.price,
      title:action.title
    }

    try {
      const response=axios.post(`${process.env.REACT_APP_SURL}/cartdata`,cartdata);
      if(response.status==201){
        console.log("ADD TO CART")
        state= "add to cart"
    }
    } catch (error) {
      console.log(error)
    }
     

      
    

    case "in":

      try {
        const response=axios.put(`${process.env.REACT_APP_SURL}/increase`,{_id:action.userid,id:action.q1});
        if(response.status==201){
          console.log("inc "+action.q1+" "+action.userid)
      
      }
      } catch (error) {
        console.log(error)
      }
     
      
    case "dc":
      try {
        const response=axios.put(`${process.env.REACT_APP_SURL}/decrease`,
        {_id:action.userid,id:action.q2,product_price:action.product_price});
        if(response.status==201){
          console.log("inc "+action.q2+" "+action.userid)
      
      }
      } catch (error) {
        console.log(error)
      }

      case "delete_item":
      console.log("remove" + action.q3);
     
    try {
      const response=axios.put(`${process.env.REACT_APP_SURL}/delete`,{_id:action.userid,id:action.q3});
      if(response.status==201){
        console.log("remove")
        state= "remove"
    }
    } catch (error) {
      console.log(error)
    }
    default:
      return state;



  }

  
};
export default cartReducer;
