import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify';
import { QueryProvider } from '@/app/_providers/query-provider';

import '@/shared/styles/normalize.scss'

export const metadata: Metadata = {
  title: 'Taskoko',
  description: 'The best kanban app',
}

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode
}> ) {
  return (
    <html lang={'en'}>
      <body>
        <QueryProvider>
          <ToastContainer/>
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
