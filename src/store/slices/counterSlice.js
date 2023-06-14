import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  users: [],
}

export const fetchUsers2 = createAsyncThunk(
  'counter/fetchUsers2',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    return response
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    inc: (state) => {
      state.value += 1;
    },
    dec: (state) => {
      state.value -= 1;
    },
    incAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers2.fulfilled, (state, {payload}) => {
        state.users = payload
      })
  }
})

export const asyncInt = (value) => (dispatch) => {
  setTimeout(() => {
    dispatch(incAmount(value))
  }, 1000)
}


export const { inc, dec, incAmount } = counterSlice.actions;

export default counterSlice.reducer;
