import { createSlice,createAsyncThunk, nanoid } from "@reduxjs/toolkit";


const initialState = {
    user : {},
    msg : "",
    token : "",
    loading : false ,
    error : ""
}
const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {

        adduser: (state, action) => {
            state.user=action.payload;
            console.log(state);

        },
    
     
    }
})


export const { adduser}= userSlice.actions;

export default userSlice.reducer;