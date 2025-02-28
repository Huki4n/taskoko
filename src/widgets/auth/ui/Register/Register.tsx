'use client'

import Link from 'next/link'

import { RegisterForm } from '@/features/session/register'
import { P } from '@/shared/ui'

import s from './Register.module.scss'

export const Register = () => {
  return (
    <div className={s.auth}>
      <RegisterForm />
      <P type={'link'} size={'s'}>
        Already have an account?{' '}
        <Link href={'/login'} className={s.link}>
          Log in
        </Link>
      </P>
    </div>
  )
}
