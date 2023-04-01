import React, { useContext, useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { productsContext } from "../ProductState/productsContext";
import "../style.css";
import { useGetAllproductsIdQuery } from "../all api/userapi";
import { useAddtocartMutation } from "../all api/userAuthapi";
export default function ProductDetails({userData}) {


 //redux toolkit query code
  const {id}=useParams()
  const {data,isLoading}=useGetAllproductsIdQuery(id)
  
  const[Addtocart,responseInfo]=useAddtocartMutation()
  const cart=(title,image,price,id,email)=>{
   const cartData={title:title,image:image,price:price,id:id,email:email}
   Addtocart(cartData);
  }



  return (
    <div>
      <div className="container">
        <Link to="/">
          <button className="btn btn-outline-primary mt-3">back</button>
        </Link>
      
         {isLoading?<ProductdetailsLoad />:
          <div className="card details_card p-5 mt-5">
          <img src={data && data.image} />
          <div className="card-body">
            <br></br>
            <h5 className="card-title text-warning">
              <b>{data && data.title}</b>
            </h5>
            <h5 className="card-title">Catagory: {data && data.category}</h5>
            <h5 className="card-title">Description: {data && data.description}</h5>
            <p className="card-text text-primary">
              <b>{data && data.price}rs</b>
            </p>
            <button
              className="btn btn-success"
              onClick={() =>
                            cart(data.title, data.image, data.price, data.id,userData?.data?.email)
                          }
            >
              add to cart
            </button>
            <br />
          </div>
        </div>}
        
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
