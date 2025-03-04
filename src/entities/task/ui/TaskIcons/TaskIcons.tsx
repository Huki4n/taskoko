import { ITask } from '@/entities/task'
import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Icon, P } from '@/shared/ui'

import s from './TaskIcons.module.scss'

export const TaskIcons = ({ task }: TaskIconsProps) => {
  const countDoneSubtask = task.subtasks.filter(
    subtask => subtask.isDone
  ).length

  return (
    <div className={s.icons}>
      <div className={s.icon}>
        <Icon src={`${ASSETS_ICON_PATH}/list`} size={16} />
        <P>
          {countDoneSubtask}/{task.subtasks.length}
        </P>
      </div>
      <div className={s.icon}>
        <Icon
          src={`${ASSETS_ICON_PATH}/comment`}
          size={16}
        />
        <P>{task.comments.length}</P>
      </div>
      <div className={s.icon}>
        <Icon
          src={`${ASSETS_ICON_PATH}/attach`}
          size={16}
        />
        <P>{task.attachments.length}</P>
      </div>
      <div className={s.icon}>
        <Icon src={`${ASSETS_ICON_PATH}/timer`} size={16} />
        <P>{task.timer}</P>
      </div>
    </div>
  )
}

interface TaskIconsProps {
  task: ITask
}
