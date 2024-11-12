import { createSlice,createAsyncThunk, nanoid } from "@reduxjs/toolkit";


const initialState = {
    user : "",
    msg : "",
    token : "",
    loading : false ,
    error : ""
}
const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {

        addItem: (state, action) => {
            state.chats.push(action.payload);
            console.log(state);

        },
        removeItem: (state, action) => {
            state.chats = state.chats.filter((ele, ind) => ind !== action.payload
            )
        },

        updateItem: (state, action) => {
            let indexofele = state.chats.findIndex((ele) => {
                ele == action.payload
            }
            )
            state.chats[indexofele] = action.payload;
        },
        
    },
})

export const { addItem, removeItem, updateItem } = userSlice.actions;

export default userSlice.reducer;