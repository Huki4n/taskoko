import { CSSProperties } from 'react'

import {
  TaskProps,
  useEditTaskStore,
} from '@/entities/task'
import cn from 'classnames'

import { BaseTask } from '../BaseTask/BaseTask'
import { EditTask } from '../EditTask/EditTask'

import s from './Task.module.scss'

export const Task = ({
  task,
  color,
  dataIndex,
  visibility,
  columnId,
}: TaskProps) => {
  const { editTaskId, taskSize, setEditTaskId } =
    useEditTaskStore()
  const isEditTask = editTaskId === task.id

  const editTask = () => setEditTaskId(task.id, columnId)

  return (
    <li
      className={cn(
        s.task,
        isEditTask && s.taskEditable,
        visibility && s.visible
      )}
      style={
        {
          '--base-task-color': color,
          width: isEditTask
            ? `calc(100% - ${taskSize?.width}px - 16px)`
            : taskSize?.width,
        } as CSSProperties
      }
      data-index={dataIndex}
    >
      {isEditTask ? (
        <EditTask task={task} editTask={editTask} />
      ) : (
        <BaseTask task={task} editTask={editTask} />
      )}
    </li>
  )
}
