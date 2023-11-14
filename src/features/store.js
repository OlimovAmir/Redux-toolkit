import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./caregories/categoriesSlice";


export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
    },
    devTools: true,
})