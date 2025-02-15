import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritos'
import apiSlice from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    favoritar: favoritosReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
