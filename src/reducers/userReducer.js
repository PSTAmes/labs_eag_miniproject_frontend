import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        currentUser : localStorage.getItem("currentUser"),
        isFetching : false,
        error: false,
    },


    reducers:{
        logInStart : (state) =>{
            state.isFetching = true;
        },
        logInSuccess : (state) => {
            state.isFetching = false;
            localStorage.setItem("currentUser", JSON.stringify(action.payload));
            state.currentUser = localStorage.getItem("currentUser");
        },
        loginFailure : (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutUser : (state) =>{
            localStorage.clear("currentUser");
            state.currentUser = null;
        },
    },
});

export const {logInStart, logInSuccess, loginFailure, logoutUser} = userSlice.actions;

export default userSlice.reducer;