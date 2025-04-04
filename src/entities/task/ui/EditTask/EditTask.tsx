import { BaseTaskEditProps } from '@/entities/task'

import { TaskAdditionalInfo } from '../TaskAdditionalInfo/TaskAdditionalInfo'
import { TaskImage } from '../TaskImage/TaskImage'
import { TaskMainInfo } from '../TaskMainInfo/TaskMainInfo'

import s from './EditTask.module.scss'

export const EditTask = ({
  task,
  editTask,
}: BaseTaskEditProps) => {
  return (
    <>
      <div className={s.editTaskTop}>
        <TaskImage image={task.image} type={'base'} />
        <div className={s.mainInfo}>
        <TaskMainInfo task={task} editTask={editTask} />
        </div>
      </div>
      <TaskAdditionalInfo
        subtasks={task.subtasks}
        comments={task.comments}
        attachments={task.attachments}
      />
    </>
  )
}
