import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const indexItem = state.products.findIndex(
        (item) =>
          item._id === action.payload._id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      const addNewItem = () => {
        state.quantity += 1;
        state.products.push(action.payload);
      };
      if (indexItem >= 0) {
        state.products[indexItem].quantity += action.payload.quantity;
      } else {
        addNewItem();
      }
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
