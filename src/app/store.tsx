// "use client" ;
import { configureStore } from "@reduxjs/toolkit";
// import chatSlice from "./REDUX/Reducer/chatSlice";
import authSlice from "./REDUX/Reducer/authSlice";

export const store = configureStore({
    reducer: {
        // chats: chatSlice,
        users:authSlice,
    },
    devTools: true,
});


// export type AppStore = ReturnType<typeof store>;
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>;
// export type AppDispatch = AppStore['dispatch'];

// export default store;



// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";
// // import rootReducer from "./Reducer/index";
// let initialState = {};
// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// // );
