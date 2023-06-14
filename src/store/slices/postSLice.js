import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 'idle',
  post: null,
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPostFetch: (state) => {
      state.status = 'fetching'
    },
    getPostSuccess: (state, action) => {
      state.post = action.payload
      state.status = 'idle'
    },
    getPostFail: (state) => {
      state.status = 'fail'
    }
  }
})

export const { getPostFetch, getPostSuccess, getPostFail } = postSlice.actions

export default postSlice.reducer