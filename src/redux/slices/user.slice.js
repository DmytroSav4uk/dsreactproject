import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";


const initialState = {
    users: [],
    oneUser: null,
    loading: false,
    error: null
}

const getAll = createAsyncThunk('userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll()
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)


const userSlice = createSlice({

    name: 'userSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.users = action.payload
        },
        getOne: (state, action) => {
            state.oneUser = action.payload
        }
    }
});

const {reducer: userReducer, actions: {getAll, getOne}} = userSlice;

const userActions = {
    getAll,
    getOne
}


export {
    userActions,
    userReducer
}
