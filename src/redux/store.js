import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import addPostSlice from './reducers'

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
})

export const store = configureStore({
    reducer: {
        addPost: addPostSlice
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
})
