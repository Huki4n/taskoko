import { CSSProperties } from 'react'

import { Task } from '@/entities/task'
import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Icon, P } from '@/shared/ui'

import { IColumn } from '../model/types'

import s from './Column.module.scss'

export const Column = ({ column }: ColumnProps) => {
  return (
    <li
      className={s.column}
      style={
        {
          '--base-column-color': column.color,
        } as CSSProperties
      }
    >
      <div className={s.columnHeader}>
        <div className={s.element} />

        <div className={s.columnInfo}>
          <P>{column.name}</P>

          <div className={s.columnAdditionalInfo}>
            <div className={s.columnCountTasks}>
              {column.tasks.length}
            </div>
            <Icon
              src={`${ASSETS_ICON_PATH}/dots`}
              size={18}
            />
            <Icon
              src={`${ASSETS_ICON_PATH}/plus`}
              size={16}
            />
          </div>
        </div>
      </div>

      <ul className={s.taskList}>
        {column.tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            color={column.color}
          />
        ))}
      </ul>
    </li>
  )
}

interface ColumnProps {
  column: IColumn
}
