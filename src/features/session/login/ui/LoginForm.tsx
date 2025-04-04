import { useRouter } from 'next/router'

import { useForm } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
import { FormEvent } from 'react'

import {
  ILoginRequest,
  loginApi,
} from '@/entities/session/login'
import { saveTokenToStorage } from '@/shared/lib/token-utils/tokenStorage'
import { Button, Input } from '@/shared/ui'

import { loginSchema } from '../model/loginSchema'

import s from './LoginForm.module.scss'

export const LoginForm = () => {
  const router = useRouter()

  const login = useMutation({
    mutationKey: [loginApi.baseKey],
    mutationFn: loginApi.login,
    onSuccess: response => {
      saveTokenToStorage(response.data.accessToken)
      router.push('/dashboard')
    },
  })

  const loginForm = useForm<ILoginRequest>({
    onSubmit: ({ value }) => login.mutate(value),
    validators: {
      onChange: loginSchema,
      onSubmit: loginSchema,
    },
  })

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    e.stopPropagation()
    await loginForm.handleSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.inputs}>
        <div className={s.input}>
          <loginForm.Field name={'email'}>
            {field => (
              <Input
                type={'text'}
                label={'Email'}
                name={field.name}
                value={field.state.value}
                onChange={field.handleChange}
                error={field.state.meta}
                placeholder={'Email'}
                className={'auth'}
              />
            )}
          </loginForm.Field>
        </div>
        <div className={s.input}>
          <loginForm.Field name={'password'}>
            {field => (
              <Input
                type={'password'}
                label={'Password'}
                name={field.name}
                value={field.state.value}
                onChange={field.handleChange}
                error={field.state.meta}
                placeholder={'Password'}
                className={'auth'}
              />
            )}
          </loginForm.Field>
        </div>
      </div>
      <Button
        type={'submit'}
        className={'full'}
        fontSize={16}
        typeButton={'auth'}
      >
        Continue
      </Button>
    </form>
  )
}
