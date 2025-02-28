'use client'

import Link from 'next/link'

import { LoginForm } from '@/features/session/login/ui/LoginForm'
import { P } from '@/shared/ui'

import s from './Login.module.scss'

export const Login = () => {
  return (
    <div className={s.auth}>
      <LoginForm />
      <P type={'link'} size={'s'}>
        New user?{' '}
        <Link href={'/register'} className={s.link}>
          Create an account
        </Link>
      </P>
    </div>
  )
}
