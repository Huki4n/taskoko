import Link from 'next/link'

import { headerNavLinks } from '../../model/headerNavLinks'

import s from './HeaderNav.module.scss'

export const HeaderNav = () => {
  return (
    <nav className={s.headerNav}>
      <ul className={s.navList}>
        {headerNavLinks.map(({ label, href }) => (
          <li key={label} className={s.navItem}>
            <Link href={href} className={s.navLink}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
