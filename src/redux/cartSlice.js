import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  totalprt: 0,
  totalcarb: 0,
  totalfat: 0,
  totalkc: 0,
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    AddtoCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.carts[itemIndex].amount += action.payload.amount;
      } else {
        state.carts = [...state.carts, action.payload];
      }
      state.totalprt = state.totalprt + action.payload.prt;
      state.totalcarb = state.totalcarb + action.payload.carb;
      state.totalfat = state.totalfat + action.payload.fat;
      state.totalkc = state.totalkc + action.payload.kc;
    },
    RemoveToCart: (state, action) => {
      const filteredItems = state.carts.filter(
        (item) => item.id !== action.payload.id
      );
      state.carts = filteredItems;
      state.totalprt = state.totalprt - action.payload.prt * action.payload.amount;
      state.totalcarb = state.totalcarb - action.payload.carb * action.payload.amount;
      state.totalfat = state.totalfat - action.payload.fat * action.payload.amount;
      state.totalkc = state.totalkc - action.payload.kc * action.payload.amount;
    },
    ClearCart: (state) => {
      state.carts = [];
      state.totalprt = 0;
      state.totalcarb = 0;
      state.totalfat = 0;
      state.totalkc = 0;
    },
  },
});


export const { AddtoCart, RemoveToCart, ClearCart } = cartSlice.actions;

export default cartSlice.reducer;
