import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAuthapi = createApi({
   //tagTypes:["userData"],
  reducerPath: 'userAuthapi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_SURL}` }),
  endpoints: (builder) => ({
    LoginUser: builder.mutation({
      query: (loginInfo) =>{
        return {
            url:`login`,
            method:`POST`,
            body:loginInfo,
        }
      },
    }),

    registerUser: builder.mutation({
        query: (signupInfo) =>{
            console.log(signupInfo);
          return {
              url:`register`,
              method:`POST`,
              body:signupInfo,
          }
        },
      })
    
   
      
  }),
})

export const { useLoginUserMutation,useRegisterUserMutation } = userAuthapi