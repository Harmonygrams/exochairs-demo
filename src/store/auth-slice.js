import { createSlice } from '@reduxjs/toolkit' 
const authSlice = createSlice({
    name : "authSlice", 
    initialState : {isAuthenticated : false, username : "Guest"}, 
    reducers : {
        setAuthentication : (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated
            state.username = action.payload.username
        }
    }
})
const authSliceReducer = authSlice.reducer
const actions = authSlice.actions 
export {authSliceReducer, actions}