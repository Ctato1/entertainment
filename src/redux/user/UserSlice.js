import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:false,
    isClicked:false,
}
const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.isLoggedIn = true
        },
        logout:(state,action)=>{
            state.isLoggedIn = false
        },
        clickFavorite:(state,action)=>{
            state.isClicked= !state.isClicked
        }
    }
})

export const userActions =UserSlice.actions;

export default UserSlice.reducer;