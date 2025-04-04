import { Navigation } from '../Navigation/Navigation'
import { Projects } from '../ProjectsList/ProjectsList'
import { User } from '../User/User'

import s from './Sidebar.module.scss'

export const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <User />
      <Navigation />
      <Projects />
    </aside>
  )
}
