import { memo } from 'react'

import { IAssignee } from '@/entities/user'
import { UserList } from '@/shared/ui'

export const BoardUsers = memo(() => {
  const boardUsers: IAssignee[] = [
    {
      id: '1',
      name: 'John Doe',
      avatarUrl: 'placeholder_avatar',
    },
    {
      id: '1',
      name: 'John Doe',
      avatarUrl: 'placeholder_avatar',
    },
    {
      id: '1',
      name: 'John Doe',
      avatarUrl: 'placeholder_avatar',
    },
    {
      id: '1',
      name: 'John Doe',
      avatarUrl: 'placeholder_avatar',
    },
    {
      id: '1',
      name: 'John Doe',
      avatarUrl: 'placeholder_avatar',
    },
    {
      id: '1',
      name: 'John Doe',
      avatarUrl: 'placeholder_avatar',
    },
    {
      id: '1',
      name: 'John Doe',
      avatarUrl: 'placeholder_avatar',
    },
  ]

  return (
    <UserList
      userList={boardUsers}
      hasButton
      maxUsers={5}
    />
  )
})

BoardUsers.displayName = 'BoardUsers'
