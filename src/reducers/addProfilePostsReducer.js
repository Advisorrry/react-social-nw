import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    items: ['kak dela', 'test']
}

const addPostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPostAC(state, action) {
      state.items.push(action.payload)
    },
  },
})

export const { addPostAC } = addPostSlice.actions
export default addPostSlice.reducer