import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TestUser() {
const [mydata, setmydata] = useState(0)
    const showdata=()=>{
       setTimeout(() => {
        setmydata(mydata+1)
       }, 2000);
    }

    useEffect(() => {
        console.log("cccc");
        showdata()
     
    }, [])
    
  return (
    <div>
        <h1>Test user</h1>
        <h1 className='text-primary'>{mydata}</h1>
    </div>
  )
}
