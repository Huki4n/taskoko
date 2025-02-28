'use client'

import { Nova_Mono } from 'next/font/google'

import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'
import cn from 'classnames'

import s from './BaseLayout.module.scss'

const novaMono = Nova_Mono({
  weight: '400',
  subsets: ['latin'],
})

export const BaseLayout = ({ children }: LayoutProps) => {
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
