import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import cartSlice from './slices/cartSlice'
import wishlistSlice from './slices/wishlistSlice'

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		wishlist: wishlistSlice,
		[api.reducerPath]: api.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
})
