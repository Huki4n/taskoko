import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import { ToastContainer } from 'react-toastify'

import { QueryProvider } from '@/app/providers/query-provider'

export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <QueryProvider>
      <Head>
        <title>Taskoko</title>
        <meta
          name={'description'}
          content={'The best kanban app'}
        />
      </Head>
      <NextNProgress
        color={'var(--color-primary)'}
        height={10}
        options={{ showSpinner: true }}
      />
      <Component {...pageProps} />
      <ToastContainer />
    </QueryProvider>
  )
}
