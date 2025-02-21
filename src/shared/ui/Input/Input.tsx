import { FieldMeta, Updater } from '@tanstack/form-core'

import s from './Input.module.scss'

export const Input = ({
  type,
  name,
  value,
  onChange,
  onBlur,
  meta,
  label,
  placeholder,
  className = 'base',
  size,
}: InputProps) => {
  return (
    <>
      {label && <label htmlFor={''}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        className={s[className]}
        autoComplete={className === 'search' ? 'off' : 'on'}
        size={size}
      />
      {meta.isTouched && meta.errorMap['onChange'] && (
        <p style={{ color: 'red' }}>
          {meta.errorMap['onChange']}
        </p>
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
  meta: FieldMeta

  label?: string
  placeholder?: string
  className?: 'base' | 'search'
  size?: number
}
