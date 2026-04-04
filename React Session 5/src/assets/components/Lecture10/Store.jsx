
import { configureStore } from "@reduxjs/toolkit";
import {SliceAddBookProvider,SliceMulProvider} from './SliceAddBook';
import UserApifetchData from "../Lecture11/userSliceApis/userSliceApi";

const store = configureStore({
    reducer:{
        totalBook:SliceAddBookProvider,
        mul:SliceMulProvider,
        aapi:UserApifetchData
    }
});

export default store;
