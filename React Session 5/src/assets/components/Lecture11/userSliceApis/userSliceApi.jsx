
import { fetchDataUser } from "../userAPIs/UserApi"
import {createSlice,createAsyncThunk} from '../userAPIs/UserApi'

export const fetchData = createAsyncThunk(
    'user/fetchapi',
    async ()=>{
        const data = await fetchDataUser()
        return data
    }
)

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
        .addCase(fetchData.fullfilled,(state,action)=>{
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