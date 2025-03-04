import { BaseTaskProps } from '@/entities/task'

import { TaskAdditionalInfo } from '../TaskAdditionalInfo/TaskAdditionalInfo'
import { TaskImage } from '../TaskImage/TaskImage'
import { TaskMainInfo } from '../TaskMainInfo/TaskMainInfo'

export const EditTask = ({
  task,
  editTask,
}: BaseTaskProps) => {
  return (
    <>
      <div>
        <TaskImage image={task.image} type={'base'} />
        <TaskMainInfo task={task} editTask={editTask} />
      </div>
      <TaskAdditionalInfo />
    </>
  )
}
