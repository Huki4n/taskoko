import Image from 'next/image'

import cn from 'classnames'

import s from './Icon.module.scss'

export const Icon = ({
  src,
  size,
  alt = '',
  resizable = true,
  type = 'base',
  opacity,
  onClick,
}: IconProps) => {
  const [width, height] = Array.isArray(size)
    ? size
    : [size, size]

  return (
    <Image
      src={`${src}.svg`}
      alt={alt}
      className={cn(
        resizable && s.size,
        s[type],
        s[`opacity${opacity}`],
        onClick && s.clickable,
        s.icon
      )}
      width={width}
      height={height}
      onClick={onClick}
    />
  )
}

interface IconProps {
  src: string
  size: number | [number, number]
  alt?: string
  resizable?: boolean
  opacity?: 30 | 70
  type?: 'base' | 'transparent'
  onClick?: () => void
}
