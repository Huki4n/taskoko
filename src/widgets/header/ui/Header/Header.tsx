import { HeaderNav } from '../HeaderNav/HeaderNav'
import { InfoIcons } from '../InfoIcons/InfoIcons'
import { Logo } from '../Logo/Logo'
import { Search } from '../Search/Search'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.leftSide}>
        <Logo />
        <HeaderNav />
      </div>
      <div className={s.rightSide}>
        <Search />
        <InfoIcons />
      </div>
    </header>
  )
}
