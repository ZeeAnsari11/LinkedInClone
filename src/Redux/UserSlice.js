import {createSlice} from "@reduxjs/toolkit";

const initialState= {
    UserStatus : {}
}

const UserSlice = createSlice({
    name :'Person',
    initialState,
    reducers:{
        LogIn : ( state, action )=>{
            state.UserStatus = action.payload;
        },

        LogOut : ( state, action )=>{
            state.UserStatus = action.payload;
        }
    }

})

export const {LogIn , LogOut } = UserSlice.actions

export default UserSlice.reducer;