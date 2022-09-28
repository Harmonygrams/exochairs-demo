import {createSlice} from '@reduxjs/toolkit' 

const cartSlice = createSlice({
    name : "cart", 
    initialState : {
        totalPrice : 0, 
        itemsList : [], 
        totalQuantity : 0
    }, 
    reducers : {
        addToCart : (state, action) => {
            const newItem = {
                id : action.payload.id, 
                itemPrice : action.payload.itemPrice, 
                imageName : action.payload.imageName, 
                quantity : 1,
                totalPrice : action.payload.itemPrice
            }
            const isItemInCart = state.itemsList.find(item => item.id === newItem.id)
            if(isItemInCart){
                isItemInCart.quantity ++ 
                isItemInCart.price = newItem.itemPrice
                isItemInCart.totalPrice += newItem.itemPrice
            }else{
                state.itemsList.push(newItem) 
                state.totalQuantity += 1
            }
        }, 
        removeItem : (state, action) => {

        }
    }
})
const actions = cartSlice.actions
const cartReducer = cartSlice.reducer 

export {actions, cartReducer}