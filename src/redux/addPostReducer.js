import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    items: ['kak dela', 'test']
}

const addPostSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProfilePostAC(state, action) {
      state.items.unshift(action.payload)
    },
  },
})

export const { addProfilePostAC } = addPostSlice.actions
export default addPostSlice.reducer