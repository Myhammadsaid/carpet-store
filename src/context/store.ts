import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import cartSlice from './slice/cartSlice'
import heartSlice from './slice/heartSlice'

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		heart: heartSlice,
		[api.reducerPath]: api.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
})
