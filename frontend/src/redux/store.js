import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import cartReducer from "./slice/cartSlice";
import { userReducer } from "./slice/userSlice";
// import productsReducer, { productsFetch } from "./slice/productsSlice";
// import { productsApi } from "./slice/productsApi";

const store = configureStore({
  reducer: {
    // products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    // [productsApi.reducerPath]: productsApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(productsApi.middleware),
});


// store.dispatch(productsFetch());

export default store;
