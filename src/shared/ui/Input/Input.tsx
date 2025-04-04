import { P } from '@/shared/ui'
import { FieldMeta, Updater } from '@tanstack/form-core'
import cn from 'classnames'

import s from './Input.module.scss'

export const Input = ({
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
  label,
  placeholder,
  textColor='black',
  className = 'auth',
  size,
}: InputProps) => {
  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className={cn(s[`label-${className}`], s[textColor] , s.label)}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        className={cn(s[className], s.input, s[textColor])}
        autoComplete={className === 'search' ? 'off' : 'on'}
        size={size}
      />
      {error.isTouched && error.errorMap['onChange'] && (
        <P type={'error'} size={'s'}>
          {error.errorMap['onChange']}
        </P>
      )}
    </>
  )
}

interface InputProps {
  type: string
  name: string
  value: string | number
  onChange: (updater: Updater<string>) => void
  onBlur?: () => void
  error: FieldMeta

  textColor?: 'white' | 'black',
  label?: string
  placeholder?: string
  className?: 'auth' | 'search'
  size?: number
}
