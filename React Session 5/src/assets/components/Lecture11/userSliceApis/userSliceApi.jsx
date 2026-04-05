
import { fetchDataUser } from "../userAPIs/UserApi"
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk(
    'user/fetchapi',
    async ()=>{
        console.log()
        const data = await fetchDataUser()
        return data
    }
)
// export const getDataById = createAsyncThunk(
//    'user/fetchapi2',
//    async (e)=>{
//     console.log(e)
//    }
// )
// console.log(fetchData)

const UserApifetchData = createSlice({
    name:"user",
    initialState:{
        user:[],
        loading:true,
        error:null
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchData.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading = false
            state.user = action.payload;
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.loading = false
            state.error = action.message.error
        })
    }
})

export default UserApifetchData.reducer