import { createSlice } from '@reduxjs/toolkit'
import { LocalStorageItems, initialStateUser } from '../../model'

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: localStorage.getItem(LocalStorageItems.USER)
    ? JSON.parse(localStorage.getItem(LocalStorageItems.USER) || '{}')
    : initialStateUser,
  reducers: {
    addUser: (_state, action) => {
      localStorage.setItem(
        LocalStorageItems.USER,
        JSON.stringify(action.payload)
      )
      return action.payload
    },
    resetUser: () => {
      localStorage.removeItem(LocalStorageItems.USER)
      return initialStateUser
    },
  },
})

export const { addUser, resetUser } = currentUserSlice.actions

export default currentUserSlice.reducer
