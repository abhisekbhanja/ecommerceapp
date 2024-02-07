import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../all api/userAuthapi';
import { loginuser } from '../state/action-creator';

export default function Login() {

    
  let token=localStorage.getItem("usertoken");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [LoginUser,responseInfo]=useLoginUserMutation()
    //console.log(responseInfo);
  
   
    

  return (
    <div className='mt-5 p-1 signup_page'>
    
    <div className="container signup-form mt-5">


       <form className='p-4 card' onSubmit={handleSubmit((data)=>LoginUser(data))}>
       <h5 className='text-center'>Login here</h5>
       <br />
       
       <div className="form-group">
          <input type="text"
          className={errors.email?'form-control is-invalid':'form-control'}
         {...register("email",{required:"this field is required"})}
          placeholder="Enter your email" />
          <div className='text-danger'>{errors.email?.message}</div>
        </div>
       <div className="form-group">
          <input type="password"
          className={errors.password?'form-control is-invalid':'form-control'}
          {...register("password",{required:"this field is required"})}
          placeholder="Enter your password"
          autoComplete='on' />
          <div className='text-danger'>{errors.password?.message}</div>
        </div>
       <div className="form-group">
          <input type="submit" className='btn btn-success' value="login" />
        </div>
        
        <div>{responseInfo.status==="pending"?<div> <div className="spinner-border text-warning"></div> loading...</div>:""}</div>
        
        <div>{responseInfo && responseInfo.isSuccess?<Navigate to="/"/>:""}</div>
        <div>{responseInfo?.error?.originalStatus===401?<div className='alert alert-danger'>invaild credentials</div>:""}</div>

        {responseInfo.isSuccess && responseInfo.isSuccess? 
        localStorage.setItem("usertoken",responseInfo.data.token):""}
        
        <small>create an account? <Link to='/signup'>click here</Link></small>
       
       </form>
    </div>
</div>
  )
}
