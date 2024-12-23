import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";


const initialState = {
    user: "",
    msg: "",
    token: "",
    loading: false,
    error: ""
}


export const SignUp = createAsyncThunk("signupuser", async (body) => {
    console.log(body);

    // const config = { headers: { "Content-Type": "application/json" } };
    const register = await fetch(`http://localhost:3000/server/api/loginroute`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    }
    )
    console.log(register.json());
    return await register.json();
    // dispatch({ type: LOGIN_SUCCESS, payload: data.user });
});


const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        adduser: (state, action) => {
            state.user = action.payload;
            console.log(state);
        },

    },
    // extraReducers: {
    //     [SignUp.pending]: (state, action) => {
    //         state.loading = true;
    //     },
    //     [SignUp.fulfilled]: (state, { payload: error, msg }) => {
    //         state.loading = false;
    //         if (error) {
    //             state.error = error;
    //         } else {
    //             state.msg = msg;
    //         }
    //     },
    //     [SignUp.rejected]: (state, action) => {
    //         state.loading = true;
    //     }
    // }
})


export const { adduser } = authSlice.actions;

export default authSlice.reducer;