import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    users: [],
    oneUser: null,
    loading: false,
    error: null
}


const userSlice = createSlice({

    name: 'userSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.users = action.payload
        }
    }
});

const {reducer: userReducer, actions: {getAll}} = userSlice;

const userActions = {
    getAll
}


export {
    userActions,
    userReducer
}
