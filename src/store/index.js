import { configureStore } from '@reduxjs/toolkit' 
import {authSliceReducer} from '../store/auth-slice'
import { cartReducer } from '../store/cart-slice'
const store = configureStore({
    reducer : {
        auth : authSliceReducer, 
        cart : cartReducer
    }
})
export default store