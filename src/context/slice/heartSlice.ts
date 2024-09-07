import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IProduct {
	id: number
	title: string
	price: number
	image: string
	quantity: number
}

interface IProductValue {
	value: IProduct[]
}

const initialState: IProductValue = {
	value: JSON.parse(localStorage.getItem('wishlist') || '[]'),
}

const heartSlice = createSlice({
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

export const { toggleHeart } = heartSlice.actions
export default heartSlice.reducer
