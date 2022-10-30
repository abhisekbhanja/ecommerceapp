import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { productsContext } from "../ProductState/productsContext";
import { incquantity, decquantity, showuser, increase_quantity, decrease_quantity, remove_product } from "../state/action-creator";
import "../style.css";
import axios from 'axios'

import "../stylesheet/cart.css";
import useMyhook from "./useMyhook";
export default function Cart({ removeproduct }) {
  //////////////

  const cartsdata = useSelector((state) => state.mycart);
  const navigate = useNavigate();
 

  const dispatch = useDispatch();
const [total, settotal] = useState(0)
const [size, setsize] = useState(0)

  /////////////////
const buynow=(total)=>{
 
  if(loginuserData.firstname==""){
    navigate("/login")
  }
  else{
    axios.post(`${process.env.REACT_APP_SURL}/order`,{total:total}).then((info)=>{
      //console.log(total)
      //console.log(info)
  var options = {
    "key": process.env.REACT_APP_APIKEY, 
    // "amount": info.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfBDn4_cYMz-d-b3Wr4cxXNkMkjwzws27Ug&usqp=CAU",
    "order_id": info.data.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
    "handler": function (response){
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        navigate("/success");
    },
    "prefill": {
        "name": loginuserData.firstname,
        "email": loginuserData.email,
        "contact": loginuserData.mobile
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#2E2EFF"
    }
  };
  
  var rzp1 = new window.Razorpay(options);
  
  
  
    rzp1.open();
    total.preventDefault();
  
  })
  }
   


}



///////////////
const loginuserData = useSelector((state) => state.user_authReducer);
console.log(loginuserData);
if(loginuserData===" "){
  console.log("no");
  navigate("/login")
}
else{
  console.log("yes");
}
// console.log("cart item");
//const userdata=loginuserData.profile.data
const cart_item=loginuserData.cart_item
let sum=0
 cart_item &&  cart_item.map(x=>{sum=sum+x.incPrice})


useEffect(() => {
  dispatch(showuser());
}, [dispatch]);


  return (
    <div>
      
        <h1>
          <br />
         
        </h1>
     
        {sum && sum !=0?
        <div className="container-fluid mt-5">
        <Link to="/">
          <button className="btn btn-outline-primary btn-sm mt-4">
            back
          </button>
        </Link>
       
         {loginuserData.cart_item &&  
          loginuserData.cart_item.map(x=>{
              return<div  className="card m-2 p-4" key={x.id}>
              <div className="row">
                <div className="col-6">
                  <Link to={`/productdetails/`}>
                    <img className="cart-img" src={x.image} alt="" />
                  </Link>
                </div>
                <div className="col-6">
                  <p className="product-name">{x.title}</p>
                  <button
                    className="btn btn-info btn-sm quantity-btn"
                    onClick={() => dispatch(increase_quantity(x.id,loginuserData._id))}
                  >
                    +
                  </button>

                  <span className="px-4 product-name">
                    <b>{x.quantity}</b>
                  </span>

                  
                  {x.quantity===1?" ":
                    <button
                    className="btn btn-info btn-sm quantity-btn"
                    onClick={() => dispatch(decrease_quantity(x.id,loginuserData._id))}
                  >
                    -
                  </button>}
                 
                  <p className="product-name mt-1">
                    <b>
                      {x.price} X {x.quantity}={x.price*x.quantity}
                    </b>
                  </p>
                  <br></br>
                  <button
                    className="btn btn-danger btn-sm remove-btn"
                    onClick={() => dispatch(remove_product(x.id,loginuserData._id))}
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
            })
            }
        
        
        <div className="ck d-block m-auto text-center">
          <h5> Total :{Math.round(sum)==0} $</h5>
          <button
            onClick={()=>buynow(Math.round(sum))}
            className="btn btn-outline-secondary font-weight-bold"
          >
            proceed to check out
          </button>
        </div>
      </div>:<div className="text-center mt-5 pt-5">
        <h1>Please login for add to cart</h1>
        </div>}
      
    </div>
  );
}
