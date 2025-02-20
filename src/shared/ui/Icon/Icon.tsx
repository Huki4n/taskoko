import Image from "next/image";
import cn from 'classnames'

import s from './Icon.module.scss'


export const Icon = ({
  src,
  size,
  alt = '',
  resizable = true,
  className = 'base',
}: IconProps) => {
  const [width, height] = Array.isArray(size) ? size : [size, size];

  return (
    <Image
        src={src}
        alt={alt}
        className={cn(resizable && s.size, s[className])}
        width={width}
        height={height}
    />
  )
}

interface IconProps {
  src: string;
  size: number | [number, number];
  alt?: string;
  resizable?: boolean;
  className?: 'base' | 'search' ;
}