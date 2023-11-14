import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getCategories = createAsyncThunk(
    'categories/getCategories', // 1) путь / название функции
    async (_, thunkAPI) => { // колбэк запрос
        try {
            const response = await  axios (`https://api.escuelajs.co/api/v1/categories`);
            return response.data
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }

    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading  = true;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.list  = action.payload;
            state.isLoading  = false;
        });
        builder.addCase(getCategories.rejected, (state) => {
            
            state.isLoading  = false;
        });
    },
   
})


//export const { } = categoriesSlice.actions;
export default categoriesSlice.reducer;