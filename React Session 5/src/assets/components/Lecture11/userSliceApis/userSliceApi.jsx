
import { fetchDataUser } from "../userAPIs/UserApi"
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { FetchDataById } from "../../Lecture13/Lecture13"

export const fetchData = createAsyncThunk(
    'user/fetchapi',
    async ()=>{
        console.log()
        const data = await fetchDataUser()
        return data
    }
)
export const fetchDatabyId = createAsyncThunk(

    'user/fetchapibyId',
    async (id) => {
        const userData = await FetchDataById(id)
        return userData
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

const userApifetchData = createSlice({
    name:"userData",
    initialState:{
        userData:null,
        loading:true,
        error: null
    },
    extraReducers(builder){
        builder.addCase(fetchDatabyId.pending, (state)=>{
            state.loading = true
        })
        .addCase(fetchDatabyId.fulfilled, (state,action)=>{
            state.loading = false
            state.userData = action.payload
        } )
        .addCase(fetchDatabyId.rejected, (state,action)=>{
            state.loading = true
            state.error = action.message.error
        } )
    }

}
)

export const UserDataFetchByIdd = userApifetchData.reducer

export const UserApifetchDataa = UserApifetchData.reducer