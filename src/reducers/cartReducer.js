import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'carts',
    initialState : {
        items : [],
        isLoading : false,
        cartIndex : 0,
        cartValue : 0,
        cartQty : 0,
        error : null,
    }, 

    reducers : {
        startLoading : (state) =>{
            state.items = [];
            state.isLoading = true;
            state.error = null;
        },

        completeFetching : (state) =>{
            state.items = action.payload;
            state.isLoading = false;
        },

        addNewCart : (state,_) => {
            state.items.push({id: state.cartIndex + 1, items : []});
            state.cartIndex += 1;
        },

        updateCart : (state,action) =>{
            let { id, product, quantity, update} = {...action.payload};
            let updatecart = state.items.find( cart => cart.id === id);

            if(updateCart != undefined){
                let updateItem = updatecart.items.find(item => item.product.id === product.id );

                if(updateItem === undefined){
                    updatecart.items.push({product : product, cartQty:parseInt(cartQty)});
                }else{
                    updateItem.quantity = (update) ? parseInt(updateItem.quantity) + parseInt(quantity) : parseInt(quantity);
                }
            }
        },

        deleteCart : (state, action) => {
            let carts = [];

            for(const cart of state.items){
                if(cart.id !== action.payload){
                    carts.push(cart);
                }
            }

            state.items = carts;
        }, 

        addProduct : (state,action) =>{
            let existingcart = state.items.find( cart => cart.id === id);

            if(existingcart != undefined){
                state.existingcart.items.push(action.payload.product);
                state.existingcart.cartQty +=1;
                state.existingcart.cartValue += 
                    action.payload.item.unitPrice * action.payload.item.qty;

            }
        },

        deleteProduct : (state,action) =>{
            let {id, product} = {...action.payload};

            for(const cart of state.items){
                if(cart.id === id){
                    let cartItems = [];
                    for(const item of cart.items){
                        if(item.product.id !== product.id){
                            cartItems.push(item);
                        }
                    }

                    cart.items = cartItems;
                    break;
                }
            }
        }, 

        
    }
});

export const{deleteProduct, addNewCart, deleteCart, updateCart, startLoading, completeFetching} = cartSlice.actions;

export default cartSlice.reducer;

