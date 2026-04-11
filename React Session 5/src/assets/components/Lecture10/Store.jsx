
import { configureStore } from "@reduxjs/toolkit";
import {SliceAddBookProvider,SliceMulProvider} from './SliceAddBook';
import {UserApifetchDataa,UserDataFetchByIdd} from "../Lecture11/userSliceApis/userSliceApi";

const store = configureStore({
    reducer:{
        totalBook:SliceAddBookProvider,
        mul:SliceMulProvider,
        user:UserApifetchDataa,
        userData:UserDataFetchByIdd
    }
});

export default store;
