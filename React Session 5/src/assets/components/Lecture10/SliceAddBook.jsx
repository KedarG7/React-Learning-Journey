
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
export default SliceAddBook.reducer