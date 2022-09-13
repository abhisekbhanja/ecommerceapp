import axios from "axios";

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

// export const =(loginData)=>{
  
//   return {
//     type: "logi",
//     loginData:loginData
//   };
// }
export const loginuser=(loginData)=>async(dispatch)=>{
  try {
    const response=await axios.post(`${process.env.REACT_APP_SURL}/login`,loginData);
    
    if(response.status==200){
        
         localStorage.setItem('loginusertoken',response.data.token)
         console.log(response.data.token);
         dispatch(showuser())
     }
} 
catch (err) {
 if(err.response.status==401)
 { 
  console.log(err.response.data)
 
 }
 else{
  
   console.log('something is wrong try again')
  
 }
}

}

export const signupuser=(signupData)=>{
  return {
    type: "signup",
    signupData:signupData
  };
}

export const loaduser=()=>async(dispatch)=>{
  const alldata=await axios.get(process.env.REACT_APP_SURL,
    {
      headers: {
         "login-token" : localStorage.getItem("loginusertoken")
       }
     }
    )
    const userdata=alldata.data
    // console.log(userdata);
    dispatch({
      type:"loaduser",
      payload:userdata
    })
}

export const showuser=()=>async(dispatch)=>{
  const alldata=await axios.get("https://jsonplaceholder.typicode.com/posts")
  console.log(alldata.data);
    dispatch({
      type:"showuser",
      payload:alldata.data
    })
}
