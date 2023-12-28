import {createSlice} from "@reduxjs/toolkit";

const cartDataSlice = createSlice(
    {
        name: 'cartData',
        initialState: 0,
        reducers: {
            setCartCount: (state, action) => {
                state += action.payload;
                return state;
            }
        }
    }
)

export const {setCartCount} = cartDataSlice.actions;

export default cartDataSlice.reducer;