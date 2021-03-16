import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    items: ['kak dela', 'test']
}

const addPostSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addPostAC(state, action) {
      state.items.unshift(action.payload)
    },
  },
})

export const { addPostAC } = addPostSlice.actions
export default addPostSlice.reducer