import { QueryClient } from '@tanstack/query-core'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 минут
      // retry: 2,
      // retryDelay: 1000 * 2
    },
  },
})
