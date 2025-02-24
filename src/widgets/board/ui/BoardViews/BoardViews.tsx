import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Icon, P } from '@/shared/ui'
import { boardViews } from '@/widgets/board/model/boardViews'

import s from './BoardViews.module.scss'

export const BoardViews = () => {
  return (
    <ul className={s.viewList}>
      {boardViews.map((view, index) => (
        <li key={index} className={s.viewItem}>
          <Icon
            src={`${ASSETS_ICON_PATH}/${view.icon}.svg`}
            size={26}
          />
          <P type={'bold'}>{view.label}</P>
        </li>
      ))}
    </ul>
  )
}
