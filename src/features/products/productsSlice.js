import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getProducts = createAsyncThunk(
    'products/getProducts', // 1) путь / название функции
    async (_, thunkAPI) => { // колбэк запрос
        try {
            const response = await  axios (`https://api.escuelajs.co/api/v1/products`);
            return response.data
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }

    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        // filtered: [],
        // related: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading  = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.list  = action.payload;
            state.isLoading  = false;
        });
        builder.addCase(getProducts.rejected, (state) => {
            
            state.isLoading  = false;
        });
    },
   
})


//export const { } = categoriesSlice.actions;
export default productsSlice.reducer;