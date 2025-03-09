import { CSSProperties, memo } from 'react'

import { ColumnInfo } from '@/entities/column/ui/ColumnInfo/ColumnInfo'
import { useEditTaskStore } from '@/entities/task'

import { ColumnProps } from '../../model/types'
import { TaskListBlur } from '../TaskListBlur/TaskListBlur'

import s from './Column.module.scss'

export const Column = memo(
  ({ column, columnIndex }: ColumnProps) => {
    const { editColumnId } = useEditTaskStore()

    return (
      <li
        className={s.column}
        style={
          {
            '--base-column-color': column.color,
            opacity:
              editColumnId && editColumnId !== column.id
                ? '.5'
                : '1',
          } as CSSProperties
        }
      >
        <ColumnInfo
          name={column.name}
          countTasks={column.tasks.length}
        />

        <TaskListBlur
          tasks={column.tasks}
          color={column.color}
          columnId={column.id}
          columnIndex={columnIndex}
        />
      </li>
    )
  }
)

Column.displayName = 'Column'
