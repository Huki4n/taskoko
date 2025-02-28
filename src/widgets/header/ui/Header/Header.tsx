'use client'

import { HeaderNav } from '../HeaderNav/HeaderNav'
import { InfoIcons } from '../InfoIcons/InfoIcons'
import { Logo } from '../Logo/Logo'
import { Search } from '../Search/Search'

import s from './Header.module.scss'

export const Header = ({
  isLogin = false,
}: HeaderProps) => {
  return (
    <header className={s.header}>
      {isLogin ? (
        <div className={s.leftSide}>
          <Logo />
        </div>
      ) : (
        <>
          <div className={s.leftSide}>
            <Logo />
            <HeaderNav />
          </div>
          <div className={s.rightSide}>
            <Search />
            <InfoIcons />
          </div>
        </>
      )}
    </header>
  )
}

interface HeaderProps {
  isLogin?: boolean
}
