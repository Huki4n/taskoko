import { BaseTaskEditProps } from '@/entities/task'
import { TaskIcons } from '@/entities/task/ui/TaskIcons/TaskIcons'
import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Icon, P, UserList } from '@/shared/ui'

import s from './TaskMainInfo.module.scss'

export const TaskMainInfo = ({
  task,
  editTask,
}: BaseTaskEditProps) => {
  return (
    <>
      <div className={s.assignee}>
        <UserList
          userList={task.users}
          iconSize={24}
          maxUsers={3}
        />
      </div>

      {task.type && (
        <P type={'transparent'} size={'s'}>
          {task.type}
        </P>
      )}

      <P type={'bold'} size={'l'}>
        {task.name}
      </P>

      {task.description && (
        <P size={'s'}>{task.description}</P>
      )}
  
      <div className={s.additionalInfo}>
        {task.tags?.length > 0 && (
          <ul className={s.tags}>
            {task.tags.map((tag, index) => (
              <li key={index} className={s.tag}>
                <P type={'transparent'} size={'s'}>
                  #{tag}
                </P>
              </li>
            ))}
          </ul>
        )}

        <TaskIcons task={task} />
      </div>

      <div className={s.editButton}>
        <Icon
          src={`${ASSETS_ICON_PATH}/dots`}
          size={16}
          rotate={'90'}
          onClick={editTask}
        />
      </div>
    </>
  )
}
