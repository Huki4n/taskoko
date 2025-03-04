import { IAssignee } from '@/entities/user'
import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Button, Icon, P } from '@/shared/ui'
import cn from 'classnames'

import s from './UserList.module.scss'

export const UserList = ({
  userList,
  hasButton = false,
  iconSize = 40,
  maxUsers = 5,
}: UserListProps) => {
  return (
    <div className={s.users}>
      <ul className={s.userList}>
        {userList.slice(0, maxUsers).map(user => (
          <li
            key={user.id}
            className={cn(
              hasButton ? s.userItem : s.userItemTask
            )}
          >
            <Icon
              src={`${ASSETS_ICON_PATH}/placeholder_avatar`}
              size={iconSize}
            />
          </li>
        ))}
        {userList.length > maxUsers && (
          <li
            key={userList.length + 1}
            className={cn(
              s.moreCountUsers,
              hasButton ? s.userItem : s.userItemTask
            )}
          >
            <P size={hasButton ? 'm' : 'xs'}>
              +{userList.length - maxUsers}
            </P>
          </li>
        )}
      </ul>

      {hasButton && (
        <Button
          onClick={() => {}}
          icon={{ name: 'plus', size: 16 }}
        />
      )}
    </div>
  )
}

interface UserListProps {
  userList: IAssignee[]
  hasButton?: boolean
  iconSize?: [number, number] | number
  maxUsers: number
}
