import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from '../state/action-creator';

export default function  Showuser() {
    const dispatch = useDispatch();
    const {users} = useSelector((state) => state.userReducer);
       
    //   console.log("////////////");
    // console.log(users);
    // console.log(state);
    //const alluser=userList;
    useEffect(() => {
        dispatch(userAction());
      }, [users]);
  return (
    <div>
      
    <h1 className='mt-5 p-5'>User </h1>
         {/* {users._id.toString()} */}
    {/* {users.map(x=>{
      return <li>{x.username}</li>
    })} */}
    {users.toString()}
    </div>
    
  )
}
