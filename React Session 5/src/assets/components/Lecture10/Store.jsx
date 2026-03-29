
import { configureStore } from "@reduxjs/toolkit";
import SliceProvider from './SliceAddBook';

const store = configureStore({
    reducer:{
        totalBook:SliceProvider,
    }
});

export default store;
