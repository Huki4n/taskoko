import { ReactNode } from 'react'

import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Icon } from '@/shared/ui'
import cn from 'classnames'

import s from './Button.module.scss'

export const Button = ({
  type = 'default',
  icon,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(s.button, s[type])}
    >
      {icon && (
        <Icon
          src={`${ASSETS_ICON_PATH}/${icon.name}.svg`}
          size={icon.size}
        />
      )}

      {children}
    </button>
  )
}

interface ButtonProps {
  type?: 'default'
  onClick: () => void
  children?: ReactNode
  icon?: {
    name: string
    size: number | [number, number]
  }
}
