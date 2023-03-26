import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
   //tagTypes:["userData"],
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://fakestoreapi.com/products` }),
  endpoints: (builder) => ({
    getAllproducts: builder.query({
      query: () => ``,
    }),
    getAllproductsId: builder.query({
        query: (id) => ({
            url:`/${id}`
        }),
      })
   
      
  }),
})

export const { useGetAllproductsQuery,useGetAllproductsIdQuery } = userApi