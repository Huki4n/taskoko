import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Button, Icon, P } from '@/shared/ui'
import cn from 'classnames'

import s from './BoardUsers.module.scss'

export const BoardUsers = () => {
  const boardUsers = [
    {
      avatar: 'placeholder_avatar',
    },
    {
      avatar: 'placeholder_avatar',
    },
    {
      avatar: 'placeholder_avatar',
    },
    {
      avatar: 'placeholder_avatar',
    },
    {
      avatar: 'placeholder_avatar',
    },
    {
      avatar: 'placeholder_avatar',
    },
    {
      avatar: 'placeholder_avatar',
    },
  ]

  return (
    <div className={s.boardUsers}>
      <ul className={s.userList}>
        {boardUsers.slice(0, 5).map((user, index) => (
          <li key={index} className={s.userItem}>
            <Icon
              src={`${ASSETS_ICON_PATH}/${user.avatar}`}
              size={40}
            />
          </li>
        ))}
        {boardUsers.length > 5 && (
          <li
            key={boardUsers.length + 1}
            className={cn(s.moreCountUsers, s.userItem)}
          >
            <P size={'m'}>+{boardUsers.length - 5}</P>
          </li>
        )}
      </ul>

      <Button
        onClick={() => {}}
        icon={{ name: 'plus', size: 16 }}
      />
    </div>
  )
}
