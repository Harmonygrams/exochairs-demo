import { configureStore } from '@reduxjs/toolkit' 
import {authSliceReducer} from '../store/auth-slice'

const store = configureStore({
    reducer : {
        auth : authSliceReducer
    }
})
export default store