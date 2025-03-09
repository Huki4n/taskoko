import { useEffect, useRef } from 'react'

import { useEditTaskStore } from '@/entities/task'
import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { useBlockSize } from '@/shared/lib/hooks/useBlockSize'
import { Icon, P } from '@/shared/ui'

import { ColumnInfoProps } from '../../model/types'

import s from './ColumnInfo.module.scss'

export const ColumnInfo = ({
  name,
  countTasks,
}: ColumnInfoProps) => {
  const { setTaskSize } = useEditTaskStore()

  const columnRef = useRef(null)
  const blockSize = useBlockSize(columnRef)

  useEffect(() => {
    setTaskSize(blockSize)
  }, [blockSize])

  return (
    <div className={s.columnHeader} ref={columnRef}>
      <div className={s.element} />

      <div className={s.columnInfo}>
        <P>{name}</P>

        <div className={s.columnAdditionalInfo}>
          <div className={s.columnCountTasks}>
            {countTasks}
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
  )
}
