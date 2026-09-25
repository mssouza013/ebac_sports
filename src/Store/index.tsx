import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './Reducer/carrinho'
import favoritoReducer from './Reducer/favorito'
import { apiSlice } from '../Service/Api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
