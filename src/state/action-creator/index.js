import axios from "axios";
import {
  EXIST_USER,
  SHOW_USER_PROFILE,
  USERLOGIN_FAILED,
  USER_LOGIN,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../Constants/actionType";

export const addproduct = (title, image, price, id, email) => {
  return {
    type: "add",
    title: title,
    image: image,
    price: price,
    id: id,
    email: email,
  };
};

export const removeproduct = (q3, userid) => {
  return {
    type: "delete_item",
    q3: q3,
    userid: userid,
  };
};

export const incquantity = (q1, userid) => {
  return {
    type: "in",
    q1: q1,
    userid: userid,
  };
};
export const decquantity = (q2, userid, product_price) => {
  return {
    type: "dc",
    q2: q2,
    userid: userid,
    product_price: product_price,
  };
};

export const loginuser = (loginData) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  
  try {
    const response=await axios.post(`${process.env.REACT_APP_SURL}/login`,loginData);
    localStorage.setItem('loginusertoken',response.data.token)
    dispatch({type:USER_LOGIN,payload:"login successfully"})
  }
  catch(err)
  {
    dispatch({type:USERLOGIN_FAILED,payload:err.response.data})
  }
};

export const signupuser = (signupData) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SURL}/register`,
      signupData
    );
    if (response.status === 200) {
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: response });
    }
  } catch (err) {
    // console.log(err.response.data);
    if (err.response.status === 422) {
      dispatch({ type: EXIST_USER, payload: err.response.data });
    }
  }
};

export const showuser = (signupData) => async (dispatch) =>{
  try {
    const alldata=await axios.get(process.env.REACT_APP_SURL,
      {
        headers: {
           "login-token" : localStorage.getItem("loginusertoken")
         }
       }
      )
      //console.log(alldata.data);
      dispatch({type:SHOW_USER_PROFILE,payload:alldata.data.data})
  } catch (error) {
    
  }
}