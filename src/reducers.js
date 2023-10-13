import {createReducer} from '@reduxjs/toolkit'

export const cartReducer= createReducer({
    cartItems : [],shipping:0,tax:0,total:0,subTotal:0
},{
    addToCart : (state,action) =>{
        const item = action.payload
        const isItemExists = state.cartItems.find((e)=>e.id===item.id)
        //agar same id ka element mil gya toh push mat kro bss quantity add krdo
        if(isItemExists){
            state.cartItems.find((e)=>{
                if(e.id===item.id){
                    e.quantity+=1;
                }
            })
     
        }
        else{
            state.cartItems.push(item)
        }

    },
    decrement : (state,action)=>{
        const item = state.cartItems.find((e)=>e.id===action.payload)
        if(item.quantity>1){
            state.cartItems.forEach((e)=>{
                if(e.id===item.id){
                    e.quantity-=1;
                }
            })
        }

    },
    deleteFromCart : (state,action)=>{
        state.cartItems = state.cartItems.filter((e)=>e.id!==action.payload)

    },
    calculate : (state)=>{
        let sum=0
        state.cartItems.forEach((e)=>sum+= e.price*e.quantity)
        state.subTotal = sum
        state.tax = +(sum*0.18).toFixed()
        state.shipping = 100
        state.total = sum + state.tax + state.shipping
    }
})
