
import {createSlice} from '@reduxjs/toolkit';

const SliceAddBook = createSlice({
    name:'book',
    initialState:{
        value:0
    },
    reducers:{
        addBook(state){
            state.value +=1
        },
        removeBook(state){
            state.value -=1
        }
    }
});
export const {addBook,removeBook} = SliceAddBook.actions
export const SliceAddBookProvider = SliceAddBook.reducer

const multipl = createSlice({
   name:'mul',
   initialState:{
    value:10
   },
   reducers:{
    multipleFun(s){
        s.value *=2
    }
   }
})

export const {multipleFun} = multipl.actions
export const SliceMulProvider = multipl.reducer




// export default SliceAddBook.reducer ( if only single is to be exported)