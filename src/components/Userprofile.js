import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {showuser} from '../state/action-creator'
export default function Userprofile() {

  const loginuserData = useSelector((state) => state.user_authReducer);
  console.log(loginuserData.profile);
  //const userdata=loginuserData.profile.data

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showuser());
  }, [dispatch]);
  return (
    <div className='p-5 mt-5'>
        <h1>Userprofile </h1>
        {/* <div class="card text-white bg-primary">
          <img class="card-img-top" src="holder.js/100px180/" alt="" />
          <div class="card-body">
            <h4 class="card-title">{userdata.firstname}</h4>
            <p class="card-text">{userdata.email}</p>
            <p class="card-text">{userdata.mobile}</p>
            
          </div>
        </div> */}
    </div>
  )
}
