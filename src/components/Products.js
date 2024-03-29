import React, { useContext, useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../stylesheet/cart.css";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import { useGetAllproductsQuery } from "../all api/userapi";
import { useAddtocartMutation, useShowUserQuery } from "../all api/userAuthapi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@material-ui/core";

export default function Products({ userData }) {
  //redux toolkit query code
  const { data, isLoading, isError, isFetching, error } =
    useGetAllproductsQuery();

  const [all_data, setall_data] = useState([]);
  const [filter_data, setfilter_data] = useState(data);

  const [api_data, setapi_data] = useState([]);
  const load_data = () => {
    setapi_data(data);
  };
  useEffect(() => {
    load_data();
  }, [data]);

  //for to get different categorized
  // const getcatagory = (e) => {
  //   // const v = filter_data.filter((x) => {
  //   //   return x.category === e;
  //   // });
  //   // console.log(v);
  //   // setall_data(v);
  //   console.log(data.filter(x=>{return x.category===e}));
  // };
  const navigate = useNavigate();
  let token = localStorage.getItem("usertoken");
  const [Addtocart, responseInfo] = useAddtocartMutation();
  const cart = (title, image, price, id, email) => {
    if (token) {
      const cartData = {
        title: title,
        image: image,
        price: price,
        id: id,
        email: email,
      };
      Addtocart(cartData);
      toast.success("Added to cart");
    } else {
      navigate("/login");
    }
  };

  const getcatagory = (category) => {
    console.log(category);
    let f_data = data.filter((x) => x.category == category);
    setapi_data(f_data);
  };
  const low = () => {
    let m = data.slice().sort((a, b) => a.price - b.price);
    setapi_data(m);
  };

  const high = () => {
    let m = data.slice().sort((a, b) => b.price - a.price);
    setapi_data(m);
  };

  return (
    <div>
      {/* <img
        className="banner"
        src="https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      /> */}

      <div id="carouselId" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#carouselId"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselId" data-slide-to="1"></li>
          <li data-target="#carouselId" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              className="banner"
              src="https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="banner"
              src="https://cdnb.artstation.com/p/assets/images/images/032/636/605/large/natasya-a-headphone-final.jpg?1607015261"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="banner"
              src="https://i.ytimg.com/vi/XQQYGWdIKLU/maxresdefault.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselId"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselId"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container-fluid">
        <h3 className="p-4 text-center mt-2">
          {error && error.status == "FETCH_ERROR"
            ? "something is wrong"
            : "LATEST PRODUCTS"}
        </h3>
        <hr></hr>

        <div className="btns d-block m-auto text-center">
          <button
            className="btn btn-outline-secondary ml-2 category-btn"
            onClick={() => setapi_data(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-secondary ml-2 category-btn"
            onClick={() => getcatagory("men's clothing")}
          >
            Men's clothing
          </button>
          <button
            className="btn btn-outline-secondary ml-2 category-btn"
            onClick={() => getcatagory("women's clothing")}
          >
            Women's clothing
          </button>
          <button
            className="btn btn-outline-secondary ml-2 category-btn"
            onClick={() => getcatagory("jewelery")}
          >
            Jewellary
          </button>
          <button
            className="btn btn-outline-secondary ml-2 category-btn"
            onClick={() => getcatagory("electronics")}
          >
            Electronics
          </button>

          <button
            className="btn btn-secondary ml-2 dropdown-toggle category-btn"
            type="button"
            id="triggerId"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            sort by
          </button>
          <div className="dropdown-menu" aria-labelledby="triggerId">
            <button className="dropdown-item" onClick={low}>
              low to high
            </button>
            <button className="dropdown-item" onClick={high}>
              high to low
            </button>
          </div>
        </div>

        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div className="row">
            {api_data &&
              api_data.map((x) => {
                return (
                  <div className="col-6 col-lg-3" key={x.id}>
                    <div className="card product_card text-center mt-4 p-1">
                      <Link to={`/productdetails/${x.id}`}>
                        <img src={x.image} />
                      </Link>

                      <div className="card-body">
                        <p className="card-title productlist_text">{x.title}</p>
                        <p className="card-text productlist_text">
                          {x.price} $
                        </p>
                        <p className="productlist_text">
                          Rating: {x.rating.rate}
                        </p>
                        <div className="d-flex flex-column">
                          <button
                            className="btn btn-primary btn-sm products_btn"
                            color="primary"
                            onClick={() =>
                              cart(
                                x.title,
                                x.image,
                                x.price,
                                x.id,
                                userData?.data?.email
                              )
                            }
                          >
                            add to cart
                          </button>
                          <ToastContainer
                            position="top-center"
                            autoClose={900}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                          />
                          {/* <Link
                          to={`/productdetails/${x.id}`}
                          className="productlist_text mt-1"
                        >
                          details
                        </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

const Loading = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Allload />
          <Allload />
          <Allload />
          <Allload />
          <Allload />
          <Allload />
          <Allload />
          <Allload />
          <Allload />
          <Allload />
          <Allload />
          <Allload />
        </div>
      </div>
    </div>
  );
};

const Allload = () => {
  return (
    <div className="col-6 col-lg-3">
      <div className="card product_card text-center mt-4 p-2">
        <Skeleton height={130} />
        <div className="card-body">
          <h5 className="card-title">
            <Skeleton />
          </h5>
          <p className="card-text">
            <Skeleton />
          </p>
          <Skeleton count={2} width={80} />
        </div>
      </div>
    </div>
  );
};
