import { createSlice } from '@reduxjs/toolkit' 
const authSlice = createSlice({
    name : "authSlice", 
    initialState : {isAuthenticated : false, username : "Guest"}, 
    reducers : {
        setAuthentication : (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated
            state.username = action.payload.username
        }, 
        logout : (state) => {
            window.localStorage.removeItem("token")
            window.localStorage.removeItem("expiresIn")
        },
        isLoggedOut : (state) => {
            state.isAuthenticated = !state.isAuthenticated
        }
    }
})
const authSliceReducer = authSlice.reducer
const actions = authSlice.actions 
export {authSliceReducer, actions}