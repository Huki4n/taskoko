import { CSSProperties, useEffect, useRef } from 'react'

import { useEditTaskStore } from '@/entities/task'
import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { useBlockSize } from '@/shared/lib/hooks/useBlockSize'
import { Icon, P } from '@/shared/ui'

import { IColumn } from '../../model/types'
import { TaskListBlur } from '../TaskListBlur/TaskListBlur'

import s from './Column.module.scss'

export const Column = ({ column }: ColumnProps) => {
  const { editColumnId, setTaskSize } = useEditTaskStore()
  const columnRef = useRef(null)

  const blockSize = useBlockSize(columnRef)

  useEffect(() => {
    setTaskSize(blockSize)
  }, [blockSize])

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
      ref={columnRef}
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
              onClick={() => {}}
            />
            <Icon
              src={`${ASSETS_ICON_PATH}/plus`}
              size={16}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>

      <TaskListBlur
        tasks={column.tasks}
        color={column.color}
        columnId={column.id}
      />
    </li>
  )
}

interface ColumnProps {
  column: IColumn
}
