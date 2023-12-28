import {configureStore} from "@reduxjs/toolkit";
import cartDataSlice from "./slices/cartData";

const store = configureStore({
    reducer: {
        cartData: cartDataSlice
    }
})

export default store;