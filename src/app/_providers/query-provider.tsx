'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

import { queryClient } from '@/shared/api/queryClient';

export const QueryProvider = ( { children }: { children: ReactNode } ) => {
  return (
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
  );
};