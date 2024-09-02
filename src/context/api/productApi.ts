import { api } from './index'

export const productApi = api.injectEndpoints({
	endpoints: build => ({
		getProducts: build.query({
			query: params => ({
				url: '/products',
				params,
			}),
			providesTags: ['Product'],
		}),
		getDetailProduct: build.query({
			query: id => ({
				url: `/products/${id}`,
			}),
		}),
	}),
})

export const { useGetProductsQuery, useGetDetailProductQuery } = productApi
