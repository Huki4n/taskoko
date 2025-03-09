import { ReactNode } from 'react'

import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Icon } from '@/shared/ui'
import cn from 'classnames'

import s from './Button.module.scss'

export const Button = ({
  className = 'default',
  type = 'button',
  icon,
  onClick,
  children,
  cursor = 'pointer',
  fontSize = 18,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        s.button,
        s[className],
        s[cursor],
        s[`font-size-${fontSize}`]
      )}
    >
      {icon && (
        <Icon
          src={`${ASSETS_ICON_PATH}/${icon.name}`}
          size={icon.size}
          opacity={icon.opacity}
          onClick={() => {}}
        />
      )}

      {children}
    </button>
  )
}

interface ButtonProps {
  type?: 'button' | 'submit'
  className?: 'default' | 'login' | 'register'
  onClick?: () => void
  children?: ReactNode
  cursor?: 'pointer' | 'cursorDefault'
  icon?: {
    name: string
    size: number | [number, number]
    opacity?: 30 | 70
    clickable?: boolean
  }
  fontSize?: 14 | 15 | 16 | 18
}
