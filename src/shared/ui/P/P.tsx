import { Saira } from 'next/font/google'

import { ReactNode } from 'react'

import cn from 'classnames'

import s from './P.module.scss'

const saira = Saira({
  subsets: ['latin'], // Подмножество символов (например, латиница)
  weight: ['400', '600', '700'], // Начертания шрифта (обычный и жирный)
})

export const P = ({
  type = 'default',
  size = 'm',
  color = 'white',
  children,
}: ParagraphProps) => {
  return (
    <p
      className={cn(
        s[`size-${size}`],
        s[type],
        s[`color-${color}`],
        type === 'bold' && saira.className
      )}
    >
      {children}
    </p>
  )
}

interface ParagraphProps {
  type?:
    | 'default'
    | 'bold'
    | 'transparent'
    | 'error'
    | 'link'
  size?:
    | 'xss'
    | 'xs'
    | '13'
    | 's'
    | '15'
    | 'm'
    | '18'
    | 'l'
    | 'xl'
  color?: 'white' | 'black'
  children: ReactNode
}
