import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { productsContext } from "../ProductState/productsContext";
import { incquantity, decquantity } from "../state/action-creator";
import "../style.css";
import axios from 'axios'

import "../stylesheet/cart.css";
import useMyhook from "./useMyhook";
import { useRemove_item_cartMutation,useIncrease_item_cartMutation,useDecrease_item_cartMutation } from "../all api/userAuthapi";
export default function Cart({ userData }) {
  //////////////

  //const cartsdata = useSelector((state) => state.mycart);
  const navigate = useNavigate();
 

  //const dispatch = useDispatch();
const [total, settotal] = useState(0)
const [size, setsize] = useState(0)
  // const inc = (q1) => {
  //   dispatch(incquantity(q1));
  // };

  // const dec = (q2) => {
  //   dispatch(decquantity(q2));
  // };
  /////////////////

  let token=localStorage.getItem("usertoken");

  const [Remove_item_cart,responseInfo]=useRemove_item_cartMutation()
  const [Increase_item_cart]=useIncrease_item_cartMutation()
  const [Decrease_item_cart]=useDecrease_item_cartMutation()

  if(!token){
    navigate("/login")
  }

  

 const removeproduct=(id,_id)=>{
  const rmvp={_id,_id,id:id}
   Remove_item_cart(rmvp);
 }
 
   


  /////////////////
const buynow=(total)=>{
 
  if(userData?.data?.firstname==""){
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
        "name": userData?.data?.firstname,
        "email": userData?.data?.email,
        "contact": userData?.data?.mobile
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
// const user = useMyhook();
// console.log(userData);

useEffect(() => {
  if(userData){
    var sum = 0;
    userData?.data?.cart_item.map(x=>{sum=sum+x.incPrice
    settotal(sum)

    })

  }
  
}, [userData])





const inc = (q1,userid) => {
  const cartdata={id:q1,_id:userid}
  //console.log(cartdata);
  Increase_item_cart(cartdata)
  //dispatch(incquantity(q1,userid));
};

const dec = (q2,userid,product_price) => {
  const cartdata={id:q2,_id:userid,inc_price:product_price}
  //console.log(cartdata);
  Decrease_item_cart(cartdata)
  //dispatch(decquantity(q2,userid,product_price));
};



  return (
    <div>
      
        <h1>
          <br />
         
        </h1>
     
        <div className="container-fluid mt-5">
          {/* <Link to="/">
            <button className="btn btn-outline-primary btn-sm mt-4">
              back
            </button>
          </Link> */}
         
           {userData?.data?.cart_item.map(x=>{
                return<div  className="card m-2 p-4" key={x.id}>
                <div className="row">
                  <div className="col-6">
                    <Link to={`/productdetails/${x.id}`}>
                      <img className="cart-img" src={x.image} alt="" />
                    </Link>
                  </div>
                  <div className="col-6">
                    <p className="product-name">{x.title}</p>
                    <button
                      className="btn btn-info btn-sm quantity-btn"
                      onClick={() => inc(x.id,userData?.data._id)}
                    >
                      +
                    </button>

                    <span className="px-4 product-name">
                      <b>{x.quantity}</b>
                    </span>

                    
                    {x.quantity===1?" ":
                      <button
                      className="btn btn-info btn-sm quantity-btn"
                      onClick={() => dec(x.id,userData?.data._id,x.price)}
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
                      onClick={() => removeproduct(x.id,userData?.data._id)}
                    >
                      remove
                    </button>
                  </div>
                </div>
              </div>
              })
              }
          
          
          <div className="ck d-block m-auto text-center">
            <h5> Total : {Math.round(total)} rs</h5>
            <button
              onClick={()=>buynow(Math.round(total))}
              className="btn btn-outline-secondary font-weight-bold"
            >
              proceed to check out
            </button>
          </div>
        </div>
      
    </div>
  );
}
