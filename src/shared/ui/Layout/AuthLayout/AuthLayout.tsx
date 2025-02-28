import { Nova_Mono } from 'next/font/google'

import { ReactNode } from 'react'

import cn from 'classnames'

import s from './AuthLayout.module.scss'

const novaMono = Nova_Mono({
  weight: '400',
  subsets: ['latin'],
})

export const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div className={cn(s.layout, novaMono.className)}>
      <div className={s.content}>
        <main className={s.main}>{children}</main>
      </div>
    </div>
  )
}

interface LayoutProps {
  children: ReactNode
}
