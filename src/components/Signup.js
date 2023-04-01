import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../style.css"
import { useDispatch, useSelector } from "react-redux";
import { signupuser } from "../state/action-creator";
import { useRegisterUserMutation } from "../all api/userAuthapi";

export default ()=> {

  

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  
  // const onSubmit = data => console.log(data);
  const [submit_msg, setsubmit_msg] = useState("");
  const [Registeruser,responseInfo]=useRegisterUserMutation()
  
  console.log(responseInfo);

  return (
    <div className="mt-5 p-5 signup_page">
      
      <div className="container signup-form mt-5">
        
        <form className="p-5 card" onSubmit={handleSubmit((data)=>Registeruser(data))}>
        <h2 className="text-center">Sign up here {submit_msg}</h2>
        <br />
          <div className="form-group">
            <input
              type="text"
              className={
                errors.firstname ? "form-control is-invalid" : "form-control"
              }
              {...register("firstname", { required: "this field is required" })}
              placeholder="Enter your firstname"
            />
            <p className="text-danger">{errors.firstname?.message}</p>
          </div>
          <div className="form-group">
            <input
              type="text"
              className={
                errors.lastname ? "form-control is-invalid" : "form-control"
              }
              {...register("lastname", { required: "this field is required" })}
              placeholder="Enter your lastname"
            />
            <p className="text-danger">{errors.lastname?.message}</p>
          </div>
          <div className="form-group">
            <input
              type="number"
              className={
                errors.mobile ? "form-control is-invalid" : "form-control"
              }
              {...register("mobile", {
                required: "this field is required",
                minLength: { value: 10, message: "not less than 10" },
                maxLength: { value: 10, message: "not greater than 10" }
              })}
              placeholder="Enter your mobile number"
            />
            <p className="text-danger">{errors.mobile?.message}</p>
          </div>
          <div className="form-group">
            <input
              type="text"
              className={
                errors.email ? "form-control is-invalid" : "form-control"
              }
              {...register("email", {
                required: "this field is rquired",
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "give a valid email",
                },
              })}
              placeholder="Enter your email"
            />
            {/* <p className='text-danger'>{errors.email ?"email is required":""}</p> */}
            <p className="text-danger">{errors.email?.message}</p>
          </div>

          <div className="form-group">
            <input
              type="password"
              className={
                errors.password ? "form-control is-invalid" : "form-control"
              }
              {...register("password", {
                required: "this field is rquired",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message:
                    "password must contain uppercase,lowercase,number,special character and password length must be more than 8",
                },
              })}
              placeholder="Enter your password"
            />
            <p className="text-danger">{errors.password?.message}</p>
          </div>
          <div className="form-group">
            <input
              type="password"
              className={
                errors.cpassword ? "form-control is-invalid" : "form-control"
              }
              {...register('cpassword',{required: "this field is rquired",
              validate: value =>
              value === password.current || "The passwords do not match"})}
              placeholder="Confirm your password"
            />
            <p className="text-danger">{errors.cpassword?.message}</p>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="signup" />
          </div>
         <div>
          
          <div>{responseInfo?.error?.originalStatus===422?<div className='alert alert-danger'>
            email already exist
          </div>:" "}</div>
          <div>{responseInfo?.error?.originalStatus===200?<div className='alert alert-success'>
            your account create successfully
          </div>:" "}</div>
         </div>
          <p>
            already have account? <Link to="/login">click here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
