import { configureStore } from "@reduxjs/toolkit";
import {TaskApiSlice} from '@/provider/redux/query/task'
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        [TaskApiSlice.reducerPath]:TaskApiSlice.reducer
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(TaskApiSlice.middleware)

  });

setupListeners(store.dispatch)