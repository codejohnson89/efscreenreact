import { createSlice } from '@reduxjs/toolkit';

export const loggedInSlice = createSlice({
    name: 'authLogin',
    initialState: {
        value: false
    },
    reducers: {
        login: (state) => {
            state.value = true
        },
        logout: (state) => {
            state.value = false
        }
    }
})

export const { login, logout } = loggedInSlice.actions;

export default loggedInSlice.reducer;