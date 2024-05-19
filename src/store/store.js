import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { journalSlice } from './journal'
//importacion de la combinacion de todos los reducer en 1 
export const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        journal:journalSlice.reducer,
    },
})