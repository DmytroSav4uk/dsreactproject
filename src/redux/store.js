import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices/user.slice";
import {postReducer} from "./slices/post.slice";


const rootReducer = combineReducers({
    userReducer,postReducer
});

const setupStore = () => configureStore({
    reducer:rootReducer
});

export {
    setupStore
}