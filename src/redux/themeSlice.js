import { createSlice} from "@reduxjs/toolkit";

const initialState={}
const ThemeSlice=createSlice({
    name:"themeSlice",
    initialState,
    reducers:{
        setMode:(state,action)=>{
            state.mode=action.payload
        },
    setColor:(state,action)=>{
            state.color=action.payload
        }
    }
})
export const {setMode,setColor}=ThemeSlice.actions;
export default ThemeSlice.reducer;