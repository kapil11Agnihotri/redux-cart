import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalQuantity:0,
    items: [],
   
    changed:false
  },
  reducers: {
    replaceCart(state, action) {
     
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity=state.totalQuantity+1
      state.changed=true
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        // // existingItem.price = existingItem.price + newItem.price;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        // const array = state.items;
        // const newObj = action.payload;
        // for (let i = 0; i < array.length; i++) {
        //   console.log(state.items);
        //   if (array[i].id === newObj.id) {
        //     state.items[i].quantity++;
        //state.items[i].totalPrice += newObj.initialPrice;
        // extra logic for extra api call fix automatic put request happning
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed=true
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
