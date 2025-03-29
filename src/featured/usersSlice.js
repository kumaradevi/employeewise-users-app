import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[]
}


const usersSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        setUsers:(state,action)=>{
            state.data=action.payload;
        }
    }
});

export const {setUsers} =usersSlice.actions;
export default usersSlice.reducer;