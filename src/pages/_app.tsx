import type { AppProps } from 'next/app'

import App from '@/app'

import '@/shared/styles/global.scss'

const MyApp = (props: AppProps) => <App {...props} />

export default MyApp
