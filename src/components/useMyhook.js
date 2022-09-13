import axios from "axios"
import { useEffect, useState } from "react"

const useMyhook=()=> {
  const [data, setData] = useState("");
  const showUser=async()=>{
    const alldata=await axios.get(process.env.REACT_APP_SURL,
      {
        headers: {
           "login-token" : localStorage.getItem("loginusertoken")
         }
       }
      )
      
      setData(alldata.data.data)
  }
  useEffect(() => {
    //console.log(data);
   showUser()
  }, [data])

  return data
  
  
};

export default useMyhook;
