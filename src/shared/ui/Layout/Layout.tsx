import { Nova_Mono } from 'next/font/google'

import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'
import cn from 'classnames'

import s from './Layout.module.scss'

const novaMono = Nova_Mono({
  weight: '400',
  subsets: ['latin'],
})

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={cn(s.layout, novaMono.className)}>
      <Header />
      <div className={s.content}>
        <Sidebar />
        <main className={s.main}>{children}</main>
      </div>
    </div>
  )
}

interface LayoutProps {
  children: React.ReactNode
}
