import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loaduser, showuser } from "../state/action-creator";

export default function C1() {
    const dispatch = useDispatch();
    const {users} = useSelector((state) => state.user_authReducer);
    console.log("//////////////////");
    console.log(users);
    //const alluser=userList.users[0];
    useEffect(() => {
      dispatch(showuser());
    }, [dispatch]);
  return (
    <div>
      <h1>C1</h1>
    {users.map(x=>{
      return <h5>{x.username}</h5>
    })}
       
    </div>
    
  )
}
