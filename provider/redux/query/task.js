import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";



export const TaskApiSlice = createApi({
    reducerPath: 'TaskApiSlice',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3500'}),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => ({
               url: '/tasks',
               method: 'GET'
            })
        })
    })
})


export const {
    useGetTasksQuery
} = TaskApiSlice;