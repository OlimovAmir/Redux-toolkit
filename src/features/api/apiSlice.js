import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getProduct } from './../products/productsSlice';
 

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `https://api.escuelajs.co/api/v1`}),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({id}) => `/product/${id}`,
            providesTags: ["Product"]
        })
    }),
})

export const {useGetProductsQuery} = apiSlice;