import Link from 'next/link'

import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Icon, P } from '@/shared/ui'
import cn from 'classnames'

import { navLinks } from '../../model/navLinks'

import s from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        {navLinks.map(
          ({ href, label, icon, size }, index) => (
            <li
              key={href}
              className={cn(
                s.navItem,
                index % 2 === 0
                  ? s['leftItem']
                  : s['rightItem']
              )}
            >
              <Link href={href} className={s.navLink}>
                <Icon
                  src={`${ASSETS_ICON_PATH}/${icon}`}
                  size={size}
                  opacity={70}
                />
                <P>{label}</P>
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}
