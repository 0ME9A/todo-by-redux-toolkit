import {configureStore} from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";
import userReducer from '../features/users/UserSlice'

export const store = configureStore({
    reducer: {
        post: postReducer,
        user: userReducer,
    }
})