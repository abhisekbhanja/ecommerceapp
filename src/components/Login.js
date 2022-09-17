import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginuser } from '../state/action-creator';

export default function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loginerrmsg, setloginerrmsg] = useState("");
    const [S, setS] = useState("");

    let navigate=useNavigate();
    //USE THE DISPATCH
  const dispatch = useDispatch();

  const loginuserData = useSelector((state) => state.user_authReducer);
 

  const showstore=async()=>{
     const datashow=await loginuserData
     if(datashow=="login successfully"){
      setloginerrmsg(datashow)
      setS("alert alert-success")
      navigate("/")
      //window.location.reload()
     }
     else if(datashow=="invalid credentials"){
      setloginerrmsg(datashow)
      setS("alert alert-danger")
     }

   
    
  }
 useEffect(() => {
  showstore()
 })
 
  
  

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit=(data)=>{
       //console.log("componet click is working")
      dispatch(loginuser(data))
    }
  return (
    <div className='mt-5 p-5 signup_page'>
    
    <div className="container signup-form mt-5">


       <form className='p-5 card' onSubmit={handleSubmit(onSubmit)}>
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
        <p className={S}>{loginerrmsg}</p>
        <p>create an account? <Link to='/signup'>click here</Link></p>
       
       </form>
    </div>
</div>
  )
}
