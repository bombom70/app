import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 'idle',
  comments: [],
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getCommentsFetch: (state) => {
      state.status = 'fetching'
    },
    getCommentSuccess: (state, action) => {
      state.comments = action.payload
      state.status = 'idle'
    },
    getCommentFail: (state) => {
      state.status = 'fail'
    }
  }
})

export const { getCommentsFetch, getCommentSuccess, getCommentFail } = commentsSlice.actions

export default commentsSlice.reducer
