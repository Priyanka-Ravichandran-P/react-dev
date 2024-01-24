import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { addItem, removeItem, clearCart } from "./slice/cartSlice";
import RestaurantSlice, {addInfo} from "./slice/RestaurantSlice";

const globalAppStore = configureStore({
  reducer: {
    cart: cartSlice,
    restaurantDetails: RestaurantSlice
  },
});

export default globalAppStore;
