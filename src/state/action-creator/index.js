import axios from "axios";
import { GET_USERS_REQUEST,GET_USERS_SUCCESS,GET_USERS_FAIL } from "./constants/userconstans";

export const addproduct = (title, image, price, id,email) => {
  return {
    type: "add",
    title: title,
    image: image,
    price: price,
    id: id,
    email:email
  };
};

export const removeproduct = (q3,userid) => {
  return {
    type: "delete_item",
    q3: q3,
    userid:userid
  };
};

export const incquantity = (q1,userid) => {
  return {
    type: "in",
    q1: q1,
    userid:userid
    };
};
export const decquantity = (q2,userid,product_price) => {
  return {
    type: "dc",
    q2: q2,
    userid:userid,
    product_price:product_price
  };
};

export const loginuser=(loginData)=>{
  return {
    type: "login",
    loginData:loginData
  };
}

export const signupuser=(signupData)=>{
  return {
    type: "signup",
    signupData:signupData
  };
}


export const userAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USERS_REQUEST });
    const {data}=await axios.get(process.env.REACT_APP_SURL,
      {
        headers: {
           "login-token" : localStorage.getItem("loginusertoken")
         }
       }
      )
    dispatch({ type: GET_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
