import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Icon } from '@/shared/ui'

import s from './InfoIcons.module.scss'

export const InfoIcons = () => {
  return (
    <div className={s.icons}>
      <Icon
        src={`${ASSETS_ICON_PATH}/comment.svg`}
        alt={'comments'}
        size={[26, 30]}
      />
      <Icon
        src={`${ASSETS_ICON_PATH}/notification.svg`}
        alt={'Bell'}
        size={26}
      />
    </div>
  )
}
