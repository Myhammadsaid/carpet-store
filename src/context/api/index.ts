import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
	baseUrl: 'https://66361b32415f4e1a5e2648a4.mockapi.io/api',
	prepareHeaders: headers => {
		const token: string | null = localStorage.getItem('x-auth-token')
		if (token) {
			headers.set('Authorization', `Bearer ${token}`)
		}
		return headers
	},
})

const customBaseQueryWithRetry: typeof baseQuery = retry(
	async (args, api, extraOptions) => {
		const result = await baseQuery(args, api, extraOptions)

		if (result.error) {
			const { status } = result.error
			if (status === 401 || status === 403) {
				console.error('Unauthorized access - Redirecting to login...')
			}
		}

		return result
	},
	{ maxRetries: 1 }
)

export const api = createApi({
	reducerPath: 'myApi',
	baseQuery: customBaseQueryWithRetry,
	tagTypes: ['Product'],
	endpoints: () => ({}),
})
