import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../all api/userAuthapi';
import { loginuser } from '../state/action-creator';

export default function Login2() {

    

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [LoginUser,responseInfo]=useLoginUserMutation()
    console.log(responseInfo);
  
   
    

  return (
    <div className='mt-5 p-5 signup_page'>
    
    <div className="container signup-form mt-5">


       <form className='p-5 card' onSubmit={handleSubmit((data)=>LoginUser(data))}>
       <h2 className='text-center'>Login here</h2>
       <br />
       <div className="form-group">
          <input type="text"
          className={errors.email?'form-control is-invalid':'form-control'}
         {...register("email",{required:"this field is required"})}
          placeholder="Enter your email" />
          <p className='text-danger'>{errors.email?.message}</p>
        </div>
       <div className="form-group">
          <input type="password"
          className={errors.password?'form-control is-invalid':'form-control'}
          {...register("password",{required:"this field is required"})}
          placeholder="Enter your password" />
          <p className='text-danger'>{errors.password?.message}</p>
        </div>
       <div className="form-group">
          <input type="submit" className='btn btn-success' value="login" />
        </div>
        
        <p>{responseInfo.status==="pending"?<p> <div className="spinner-border text-warning"></div> loading...</p>:""}</p>
        
        <p>{responseInfo && responseInfo.isSuccess?<Navigate to="/"/>:""}</p>
        <p>{responseInfo?.error?.originalStatus===401?<p className='alert alert-danger'>invaild credentials</p>:""}</p>

        {responseInfo.isSuccess && responseInfo.isSuccess? 
        localStorage.setItem("usertoken",responseInfo.data.token):""}
        
        <p>create an account? <Link to='/signup'>click here</Link></p>
       
       </form>
    </div>
</div>
  )
}
