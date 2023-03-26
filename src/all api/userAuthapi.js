import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAuthapi = createApi({
   //tagTypes:["userData"],
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_SURL}` }),
  endpoints: (builder) => ({
    LoginUser: builder.mutation({
      query: (loginInfo) =>{
        console.log(loginInfo);
        return {
            url:`login`,
            method:`POST`,
            body:loginInfo,
        }
      },
    })
    
   
      
  }),
})

export const { useLoginUserMutation } = userAuthapi