import React, { useContext, useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { productsContext } from "../ProductState/productsContext";
import { addtocart, showproduct_details } from "../state/action-creator";
import "../style.css";
export default function ProductDetails() {

   const p = useParams().id;


  /////////

  const products_details = useSelector((state) => state.showproductReducer.product_details);
  //console.log(products_details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showproduct_details(p));
  }, [dispatch]);

  
  const loginuserData = useSelector((state) => state.user_authReducer);
   
  const addproducts=(title, image, price, id, email)=>{
   const added_product={title:title,image:image,price:price,id:id,email:email}
   //console.log(added_product);
   dispatch(addtocart(added_product))
  }
  return (
    <div>
      <div className="container">
        <Link to="/">
          <button className="btn btn-outline-primary mt-3">back</button>
        </Link>
        {!products_details ? 
          <ProductdetailsLoad />
         : 
          <div className="card details_card p-5 mt-5">
            <img src={products_details && products_details.image} />
            <div className="card-body">
              <br></br>
              <h5 className="card-title text-warning">
                <b>{products_details && products_details.title}</b>
              </h5>
              <h5 className="card-title">Catagory: {products_details && products_details.category}</h5>
              <h5 className="card-title">Description: {products_details && products_details.description}</h5>
              <p className="card-text text-primary">
                <b>{products_details && products_details.price}rs</b>
              </p>
              <button
                className="btn btn-success"
                onClick={() =>
                  addproducts(
                    products_details.title,
                    products_details.image,
                    products_details.price,
                    products_details.id,
                    loginuserData.email
                  )
                }
              >
                add to cart
              </button>
              <br />
            </div>
          </div>
}
      </div>
    </div>
  );
}

const ProductdetailsLoad = () => {
  return (
    <div>
      <div className="card details_card p-5 mt-5">
        <Skeleton height={250} width={300} />
        <div className="card-body">
          <br></br>
          <h5 className="card-title text-warning">
            {" "}
            <Skeleton width={200} />
          </h5>
          <h5 className="card-title">
            <Skeleton width={200} />
          </h5>
          <h5 className="card-title">
            <Skeleton width={400} height={100} />
          </h5>
          <p className="card-text text-primary">
            <Skeleton width={100} />
          </p>
          <Skeleton width={50} />
          <br />
        </div>
      </div>
    </div>
  );
};
