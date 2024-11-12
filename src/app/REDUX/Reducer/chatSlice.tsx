import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    chats: []
}
const chatSlice = createSlice({
    name: "chats",
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

export const { addItem, removeItem, updateItem } = chatSlice.actions;

export default chatSlice.reducer;