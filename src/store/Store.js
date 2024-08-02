import { configureStore } from "@reduxjs/toolkit";
import changepagereducer from '../slice/pagenumber';

export const store = configureStore({
    reducer: changepagereducer
})