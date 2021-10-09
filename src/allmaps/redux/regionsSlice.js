import { createSlice} from "@reduxjs/toolkit";

const initialState={
    allInfos:[]
}
const RegionsSlice=createSlice({
    name:"regionsSlice",
    initialState,
    reducers:{
        addRegionsInfos:(state,action)=>{
            state.allInfos=action.payload
        },
        deleteRegionsInfos:(state,action)=>{
            state.allInfos=[]
        }
    }
})
export const {addRegionsInfos,deleteRegionsInfos}=RegionsSlice.actions;
export default RegionsSlice.reducer;