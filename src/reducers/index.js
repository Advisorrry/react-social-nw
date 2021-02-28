import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import addPostSlice from './addProfilePostsReducer'

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
})

export default configureStore({
    reducer: {
        addPost: addPostSlice
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
})
