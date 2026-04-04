import React from 'react'
import { useDispatch , useSelector} from "react-redux"
import { addBook,removeBook,multipleFun } from './SliceAddBook';

const GetBook = () => {
    const book = useSelector((state)=> state.totalBook.value);
    const dispatch = useDispatch();
    const mulData = useSelector((state)=>state.mul.value)
  return (
    <div>
        {book}
        <button onClick={()=> dispatch(addBook())}>Add Book</button>
        <button onClick={()=>dispatch(removeBook())}>Remove Book</button>
        <br />
        {mulData}
        <button onClick={()=>dispatch(multipleFun())}>Multiple</button>
    </div>
  )
}

export default GetBook