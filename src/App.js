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
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";
import Success from "./components/Success";
import useMyhook from "./components/useMyhook";
import Userprofile from "./components/Userprofile";

//ADD THE ACTIONS NAME FROM ACTION FILE INDEX.JS
import { addproduct, removeproduct } from "./state/action-creator";

function App() {
 


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route exact path="/"element={<Products />}/>
           <Route
            exact
            path="/cart"
            element={<Cart />}
          />
          <Route
            exact
            path="/productdetails/:id"
            element={<ProductDetails />}
          />
          
          <Route exact path="/checkout" element={
            <ProtectedRoute><Checkout /></ProtectedRoute>
          } />
          <Route exact path="*" element={<Notfound />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<ProtectedRoute><Userprofile /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
