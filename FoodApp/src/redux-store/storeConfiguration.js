import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { addItem, removeItem, clearCart } from "./slice/cartSlice";

const globalAppStore = configureStore({
  reducer: {
    cart: cartSlice},
});

export default globalAppStore;
