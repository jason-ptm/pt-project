import { createSlice } from '@reduxjs/toolkit'
import { companiesData } from 'src/data'
import { Leader } from 'src/model'

const initialState: Leader = {
  id: 0,
  name: '',
  role: undefined,
  authCompanies: [],
}

export const leaderSlice = createSlice({
  name: 'leader',
  initialState: initialState,
  reducers: {
    addLeader: (_state, action) => {
      return { ...action.payload, authCompanies: [companiesData[0]] }
    },
    resetLeader: () => initialState,
  },
})

export const { addLeader, resetLeader } = leaderSlice.actions

export default leaderSlice.reducer
