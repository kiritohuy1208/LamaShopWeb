import { configureStore } from "@reduxjs/toolkit";
import cartReduce from "./CartRedux";

export default configureStore({
  reducer: {
    cart: cartReduce,
  },
});
