import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({     //! This is RTKQuery
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://633ae7ca471b8c395577f828.mockapi.io'}),
    endpoints: builder => ({
        getItems: builder.query({
            query: () => '/items'
        })
    })
})

export const {useGetItemsQuery} = apiSlice;