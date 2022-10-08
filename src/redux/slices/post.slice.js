import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services";

const initialState = {
    posts: [],
    onePost: null,
    loading: false,
    error: null,
    postFromAPI: null
}

const getAll = createAsyncThunk('postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAll()
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getById = createAsyncThunk('postSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postService.getById(id)
            return data

        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const postSlice = createSlice({

    name: 'postSlice',
    initialState,
    reducers: {
        getOne: (state, action) => {
            state.onePost = action.payload
        },

        deleteById: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload)
            state.posts.splice(index, 1);
        }
    },
    extraReducers: builder =>
        builder

            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.postFromAPI = action.payload
            })
});

const {reducer: postReducer, actions: {getOne, deleteById}} = postSlice;

const postActions = {
    getAll,
    getOne,
    getById,
    deleteById
}


export {
    postActions,
    postReducer
}
