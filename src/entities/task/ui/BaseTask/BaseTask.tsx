import { BaseTaskProps } from '@/entities/task'

import { TaskImage } from '../TaskImage/TaskImage'
import { TaskMainInfo } from '../TaskMainInfo/TaskMainInfo'

export const BaseTask = ({
  task,
  editTask,
}: BaseTaskProps) => {
  return (
    <>
      {task.image && (
        <TaskImage image={task.image} type={'base'} />
      )}
      <TaskMainInfo task={task} editTask={editTask} />
    </>
  )
}
