import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAuthapi = createApi({
   tagTypes:["userData"],
  reducerPath: 'userAuthapi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://ecommerce-app-ecart5-backend.onrender.com` }),
  endpoints: (builder) => ({
    LoginUser: builder.mutation({
      query: (loginInfo) =>{
       
        return {
            url:`login`,
            method:`POST`,
            body:loginInfo,
        }
      },invalidatesTags:["userData"]
    }),

    RegisterUser: builder.mutation({
        query: (signupInfo) =>{
          return {
              url:`register`,
              method:`POST`,
              body:signupInfo,
          }
        }
      }),

      showUser: builder.query({
        query: () => ({
          url:`/`,
          method:`GET`,
          headers: {
            'Content-Type':'application/json',
            "login-token" : localStorage.getItem("usertoken")
          }
      }),providesTags:["userData"]
      }),
      Addtocart: builder.mutation({
        query: (cartdata) =>{
         //console.log(cartdata);
          return {
              url:`cartdata`,
              method:`POST`,
              body:cartdata,
              headers:{
                'Content-Type':'application/json',
            }
              
          }
        },invalidatesTags:["userData"]
      }),
      Remove_item_cart: builder.mutation({
        query: (cartdata) =>{
          return {
              url:`delete`,
              method:`PUT`,
              body:cartdata,
              headers:{
                'Content-Type':'application/json',
            }
              
          }
        },invalidatesTags:["userData"]
      }),

      Increase_item_cart: builder.mutation({
        query: (cartdata) =>{
         
          //console.log(cartdata);
          return {
              url:`increase`,
              method:`PUT`,
              body:cartdata,
              headers:{
                'Content-Type':'application/json',
            }
              
          }
        },invalidatesTags:["userData"]
      }),

      Decrease_item_cart: builder.mutation({
        query: (cartdata) =>{
          return {
              url:`decrease`,
              method:`PUT`,
              body:cartdata,
              headers:{
                'Content-Type':'application/json',
            }
              
          }
        },invalidatesTags:["userData"]
      }),
    
   
      
  }),
})

export const { useLoginUserMutation,useRegisterUserMutation,useShowUserQuery,
  useAddtocartMutation,useRemove_item_cartMutation,useIncrease_item_cartMutation,
useDecrease_item_cartMutation } = userAuthapi