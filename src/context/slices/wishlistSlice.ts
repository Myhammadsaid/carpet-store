import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IProduct {
	id: number
	title: string
	price: number
	img: string
	size: number
	quantity: number
}

interface IProductValue {
	value: IProduct[]
}

const initialState: IProductValue = {
	value: JSON.parse(localStorage.getItem('wishlist') || '[]'),
}

const wishlistSlice = createSlice({
	name: 'heart',
	initialState,
	reducers: {
		toggleHeart: (state, action: PayloadAction<IProduct>) => {
			let index = state.value.findIndex(i => i.id === action.payload.id)
			if (index < 0) {
				state.value = [...state.value, action.payload]
			} else {
				state.value = state.value.filter(i => i.id !== action.payload.id)
			}
			localStorage.setItem('wishlist', JSON.stringify(state.value))
		},
	},
})

export const { toggleHeart } = wishlistSlice.actions
export default wishlistSlice.reducer
