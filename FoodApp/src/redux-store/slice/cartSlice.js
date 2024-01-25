import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalCartItems: 0,
    totalCartAmount: 0,
    restaurantInfo: {
      name: "",
      logo: "",
      address: "",
    },
  },
  reducers: {
    addRestaurantInfo: (state, action) => {
      return {
        ...state,
        restaurantInfo: action.payload,
      };
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalCartItems = state.totalCartItems + 1;
      state.totalCartAmount += action.payload.price;
      console.log(state.totalCartAmount);
    },

    removeItem: (state, action) => {},

    decreaseQuantity: (state, action) => {
      const id = action.payload;

      let itemId = -1;
      let quantity = -1;
      state.items.map((item) => {
        if (item.id === id) {
          item.quantity--;
          state.totalCartAmount -= item.price;
          quantity = item.quantity;
          itemId = item.id;
        }
        console.log(state.totalCartAmount);
        return item;
      });
      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== itemId);
      }
      state.totalCartItems = state.totalCartItems - 1;
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id); //finding index of the item                                                                   action.payload); //finding index of the item
      const newArray = [...state.items];
      newArray[index].quantity++;
      state.totalCartAmount += newArray[index].price;
      state.totalCartItems = state.totalCartItems + 1;
      console.log(state.totalCartAmount);
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.totalCartItems = 0;
      state.totalCartAmount = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  addRestaurantInfo,
} = cartSlice.actions;

export default cartSlice.reducer;
