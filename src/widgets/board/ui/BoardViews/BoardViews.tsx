import { memo } from 'react'

import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Icon, P } from '@/shared/ui'

import { boardViews } from '../../model/boardViews'

import s from './BoardViews.module.scss'

export const BoardViews = memo(() => {
  return (
    <ul className={s.viewList}>
      {boardViews.map((view, index) => (
        <li key={index} className={s.viewItem}>
          <Icon
            src={`${ASSETS_ICON_PATH}/${view.icon}`}
            size={26}
          />
          <P type={'bold'}>{view.label}</P>
        </li>
      ))}
    </ul>
  )
})

BoardViews.displayName = 'BoardViews'
