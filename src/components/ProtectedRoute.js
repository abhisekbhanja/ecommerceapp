import React from 'react'
import { Navigate } from 'react-router-dom';
//import { useShowUserQuery } from '../all api/userAuthapi';

export default function ProtectedRoute(token,children) {
    //const {data,isLoading,isError,isFetching,error}=useShowUserQuery()
   
    if(!token){
        return <Navigate to="/login" />
    }
  return children
}
