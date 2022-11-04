import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({childern}) {
    const isAuth=localStorage.getItem("loginusertoken")
    if(!isAuth){
        return <Navigate to="/login" />
    }
    

  return (
   childern
  )
}
