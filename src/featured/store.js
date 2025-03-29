import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./authSlice"
import usersSliceReducer from "./usersSlice"

const store=configureStore({
    reducer:{
       auth:authSliceReducer,
       users:usersSliceReducer
    }
})
export default store;