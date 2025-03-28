import { createSlice } from "@reduxjs/toolkit"


const initialState={
    token:null,
    loading:false,
    error:null
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setAuth:(state,action)=> {
            state.token=action.payload;
        },
        setAuthLoading:(state,action)=>{
           state.loading=action.payload;
        },
        setAuthError:(state,action)=>{
            state.error=action.payload;
        },
        clearAuth:(state,action)=>{
            state.token=null;
        }
    }
})

export const {setAuth,setAuthLoading,setAuthError,clearAuth}=authSlice.actions;
export default authSlice.reducer;