import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Icon } from '@/shared/ui'
import { P } from '@/shared/ui/P/P'

import s from './User.module.scss'

export const User = () => {
  const user = { name: 'Hukki', email: 'Hukki@gmail.com' }

  return (
    <section className={s.user}>
      <div className={s.leftSide}>
        <Icon
          src={`${ASSETS_ICON_PATH}/placeholder_avatar.svg`}
          size={75}
        />
      </div>
      <div className={s.rightSide}>
        <P type={'bold'} size={'xl'}>
          {user.name}
        </P>
        <P size={'s'} type={'transparent'}>
          {user.email}
        </P>
        <Icon
          src={`${ASSETS_ICON_PATH}/logout.svg`}
          size={16}
          opacity={70}
        />
      </div>
    </section>
  )
}
