import { createSlice } from "@reduxjs/toolkit";

const RestaurantSlice = createSlice({
  name: "restaurantInfo",
  initialState: {
    restaurantInfo: {
        name: "",
        logo: "",
        address: "",
      }, 
  },

  reducers: {
    addInfo: (state, action) => {
      const { name, logo, address } = action.payload;
      state.restaurantInfo.name = name;
      state.restaurantInfo.logo = logo;
      state.restaurantInfo.address = address;
    },
  },
});

export const { addInfo } = RestaurantSlice.actions;
export default RestaurantSlice.reducer;
