import { configureStore } from '@reduxjs/toolkit';
import authLoginReducer from './Redux/auth/authLoginSlice';

export default configureStore({
    reducer: {
        authLogin: authLoginReducer
    }
});