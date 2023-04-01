import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Notfound from "./components/Notfound";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Success from "./components/Success";
import useMyhook from "./components/useMyhook";

//ADD THE ACTIONS NAME FROM ACTION FILE INDEX.JS
import { addproduct, removeproduct } from "./state/action-creator";
import Products1 from "./components/Products1";
import { useShowUserQuery } from "./all api/userAuthapi";

function App() {

  const {data,isLoading,isError,isFetching,error}=useShowUserQuery()

  return (
    <Router>
      <div className="App">
        <Navbar data={data}/>
        <Routes>
          <Route exact path="/" element={<Products userData={data} />} />
          <Route
            exact
            path="/cart"
            element={<Cart  userData={data}/>}
          />
          <Route
            exact
            path="/productdetails/:id"
            element={<ProductDetails />}
          />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="*" element={<Notfound />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
