import { useRouter } from 'next/router'

import { useForm } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
import { FormEvent, useState } from 'react'

import {
  IRegisterRequest,
  registerApi,
} from '@/entities/session/register'
import { IBaseResponse } from '@/shared/model/types'
import { Button, Input, P } from '@/shared/ui'
import { AxiosError } from 'axios'

import { registerSchema } from '../model/registerSchema'

import s from './RegisterForm.module.scss'

export const RegisterForm = () => {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const register = useMutation({
    mutationKey: [registerApi.baseKey],
    mutationFn: registerApi.register,
    onSuccess: () => {
      setError(null)
      router.push('/login')
    },
    onError: (error: AxiosError<IBaseResponse>) => {
      if (error.response) {
        console.log(error, 'error')
        if (
          error.response.data?.message ===
          'Failed to create user'
        ) {
          setError('User already exists')
        }
      }
    },
  })

  const registerForm = useForm<IRegisterRequest>({
    onSubmit: ({ value }) => register.mutate(value),
    validators: {
      onChange: registerSchema,
      onSubmit: registerSchema,
    },
  })

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    e.stopPropagation()
    await registerForm.handleSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.inputs}>
        <div className={s.input}>
          <registerForm.Field name={'username'}>
            {field => (
              <Input
                type={'text'}
                label={'Name'}
                name={field.name}
                value={field.state.value}
                onChange={field.handleChange}
                error={field.state.meta}
                placeholder={'Name'}
                className={'auth'}
              />
            )}
          </registerForm.Field>
        </div>
        <div className={s.input}>
          <registerForm.Field name={'email'}>
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
          </registerForm.Field>
        </div>
        <div className={s.input}>
          <registerForm.Field name={'password'}>
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
          </registerForm.Field>
        </div>
      </div>
      {error && (
        <div className={s.error}>
          <P type={'error'}>{error}</P>
        </div>
      )}
      <Button type={'submit'} className={'login'}>
        Sign up
      </Button>
    </form>
  )
}
