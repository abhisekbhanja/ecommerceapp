import axios from "axios";
import {
  ADD_TO_CART,
  EXIST_USER,
  GET_CATEGORY,
  SHOW_USER_PROFILE,
  USERLOGIN_FAILED,
  USER_LOGIN,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../Constants/actionType";

// export const addproduct = (title, image, price, id, email) => {
//   return {
//     type: "add",
//     title: title,
//     image: image,
//     price: price,
//     id: id,
//     email: email,
//   };
// };
/////////////
//add to cart action
export const addtocart = (addedproducts) => async(dispatch) => {
  //console.log(addedproducts);
  try {
    const response=await axios.post(`${process.env.REACT_APP_SURL}/cartdata`,addedproducts);
    console.log(response.data);
  }
  catch(err){

  }
};

//sort product
export const sortproduct = (s,allproducts) => (dispatch) => {
  if(s==="low"){
    const myproduct = allproducts.sort((a, b) => {
      return a.price - b.price;
    })
    //console.log(myproduct);
  }
  else  if(s==="high"){
    const myproduct = allproducts.sort((a, b) => {
      return b.price - a.price;
    })
    //console.log(myproduct);
  }

};
////////////

export const remove_product = (product_id,_id) => async(dispatch) =>{
  // console.log(product_id,_id);
  try {
    const response=await axios.put(`${process.env.REACT_APP_SURL}/delete`,{_id:_id,id:product_id});
    console.log(response.data);
  }
  catch(err){
    console.log(err);
  }
};

export const increase_quantity = (product_id,_id) => async(dispatch) =>{
  // console.log(product_id,_id);
  try {
    const response=await axios.put(`${process.env.REACT_APP_SURL}/increase`,{_id:_id,id:product_id});
    // console.log(response.data);
  }
  catch(err){

  }
};
export const decrease_quantity = (product_id,_id) => async(dispatch) =>{
  // console.log(product_id,_id);
  try {
    const response=await axios.put(`${process.env.REACT_APP_SURL}/decrease`,{_id:_id,id:product_id});
    // console.log(response.data);
  }
  catch(err){
    console.log(err);
  }
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
    dispatch({type:USERLOGIN_FAILED,payload:err.message})
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
    
      dispatch({type:SHOW_USER_PROFILE,payload:alldata.data.data})
  } catch (error) {
    console.log(error.message);
  }
}

export const showproducts = (signupData) => async (dispatch) =>{
  try {
    const alldata=await axios.get(process.env.REACT_APP_URL)
      dispatch({type:"showproducts",payload:alldata.data})
  } catch (error) {
    
  }
}

export const showproduct_details = (id) => async (dispatch) =>{
  try {
     const alldata=await axios.get(`${process.env.REACT_APP_URL}/${id}`)
    dispatch({type:"pid",payload:alldata})
  } catch (error) {
    
  }
}

export const getcategory = (category,allproducts) => (dispatch) => {
  //console.log(allproducts);
  dispatch({
    type: GET_CATEGORY,
    payload: {
      product_category:category,
      allproducts:allproducts.filter((x)=>x.category===category)
    },
  });
};