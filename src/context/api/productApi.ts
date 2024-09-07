import { api } from './index'

export const productApi = api.injectEndpoints({
	endpoints: build => ({
		getProducts: build.query({
			query: query => ({
				url: `/products${query.path}`,
				method: 'GET',
				params: query.params,
			}),
			providesTags: ['Product'],
		}),
		getDetailProduct: build.query({
			query: id => ({
				url: `/products/${id}`,
			}),
		}),
		getCategoryPtoduct: build.query({
			query: params => ({
				url: '/products/categories',
				method: 'GET',
				params,
			}),
		}),
	}),
})

export const {
	useGetProductsQuery,
	useGetDetailProductQuery,
	useGetCategoryPtoductQuery,
} = productApi
