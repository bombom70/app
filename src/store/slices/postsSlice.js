import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPosts } from '../../api'

const initialState = {
  status: "idle",
  posts: [],
}

export const fetchPostsThunk = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const posts = getPosts()
    return posts
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsFetch: (state) => {
      state.status = "fetching"
    },
    getPostsSuccess: (state, action) => {
      state.posts = action.payload
      state.status = "idle"
    },
    getPostsFailure: (state) => {
      state.status = "fail"
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsThunk.fulfilled, (state, { payload }) => {
        state.posts = payload
      })
  }
})

export const { getPostsFetch, getPostsSuccess, getPostsFailure } = postsSlice.actions

export default postsSlice.reducer
