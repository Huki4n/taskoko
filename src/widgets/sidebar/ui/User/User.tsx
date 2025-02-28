import { Logout } from '@/features/session/logout'
import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { useWindowSize } from '@/shared/lib'
import { Icon } from '@/shared/ui'
import { P } from '@/shared/ui/P/P'

import s from './User.module.scss'

export const User = () => {
  const { width } = useWindowSize()

  const user = { name: 'Hukki', email: 'Hukki@gmail.com' }

  return (
    <section className={s.user}>
      <div className={s.leftSide}>
        <Icon
          src={`${ASSETS_ICON_PATH}/placeholder_avatar`}
          size={width > 1200 ? 110 : 95}
          resizable={false}
        />
      </div>
      <div className={s.rightSide}>
        <P type={'bold'} size={'xl'}>
          {user.name}
        </P>
        <P size={'s'} type={'transparent'}>
          {user.email}
        </P>
        <Logout />
      </div>
    </section>
  )
}
