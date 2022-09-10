import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { productsContext } from "../ProductState/productsContext";
import "../stylesheet/cart.css";
import useMyhook from "./useMyhook";

export default function Navbar() {
  const count = useSelector((state) => state.mycart);
  const carts = useContext(productsContext);
  // const [showbtn, setshowbtn] = useState(true);
  const [user, setuser] = useState();
  let navigate=useNavigate();
  //custom hook
  const data = useMyhook();
  useEffect(() => {
    if(data){
      //console.log(data.firstname);
        setuser(data.firstname)
    }
 
    
  }, [data])
  
  localStorage.setItem('userid',data._id)
  // const l=data.cart_item.length
 //console.log(data.__v)

  const logout = () => {
    //console.log("logout...........");
    localStorage.removeItem("loginusertoken");
    // window.reload();
    window.location.reload(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <Link to="/" className="navbar-brand" href="#">
          Ecart5
        </Link>

        <div className="dropdown ml-auto">
          {data?<div>
            <button className="btn btn-secondary dropdown-toggle" 
                     type="button" id="dropdownMenuButton" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-user" aria-hidden="true"></i> {data?user:""}
                     </button>
                     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                       <a className="dropdown-item logout" onClick={logout}>Logout</a>
                     </div>
          </div>:
          <Loginbtn />}
        </div>

       {data? <Link className="nav-link text-warning" to="/cart">
          
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          cart ({data?data.cart_item.length:0})
        </Link>:" "}
      </nav>
    </div>
  );
}

const Loginbtn = () => {
  return (
    <>
      <Link to="/login" className="btn btn-success">
        login
      </Link>
    </>
  );
};
