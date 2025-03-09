import { CSSProperties, useState } from 'react'

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
  const [isExpanded, setIsExpanded] = useState(false)

  const { editTaskId, taskSize, setEditTaskId } =
    useEditTaskStore()
  const isEditTask = editTaskId === task.id

  if (isEditTask && !isExpanded) {
    setTimeout(() => setIsExpanded(true))
  }

  const editTask = () => setEditTaskId(task.id, columnId)

  return (
    <div
      className={cn(
        s.task,
        isEditTask && s.taskEditable,
        isExpanded && s.expanded,
        visibility && s.visible
      )}
      style={
        {
          '--base-task-color': color,
          width: !isEditTask && taskSize?.width,
        } as CSSProperties
      }
      data-index={dataIndex}
    >
      {isEditTask ? (
        <EditTask task={task} editTask={editTask} />
      ) : (
        <BaseTask task={task} editTask={editTask} />
      )}
    </div>
  )
}
