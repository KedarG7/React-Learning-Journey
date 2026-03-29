import React from 'react'
import { useDispatch , useSelector} from "react-redux"
import { addBook,removeBook } from './SliceAddBook';

const GetBook = () => {
    const book = useSelector((state)=> state.totalBook.value);
    const dispatch = useDispatch();
  return (
    <div>
        {book}
        <button onClick={()=> dispatch(addBook())}>Add Book</button>
        <button onClick={()=>dispatch(removeBook())}>Remove Book</button>
    </div>
  )
}

export default GetBook