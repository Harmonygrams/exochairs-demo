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
            state.isAuthenticated = false
            state.username = "Guest"
        },
        isLoggedIn : (state) => {
            const token = window.localStorage.getItem("token") 
            const expiresIn = window.localStorage.getItem("expiresIn")
            const username = window.localStorage.getItem("username")
            if(token && expiresIn){ 
                state.isAuthenticated = true
                state.username = username.split(' ')[0]
            }
        }
    }
})
const authSliceReducer = authSlice.reducer
const actions = authSlice.actions 
export {authSliceReducer, actions}