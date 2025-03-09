import { memo } from 'react'

import { Column, mockColumns } from '@/entities/column'

import s from './BoardContent.module.scss'

export const BoardContent = memo(() => {
  // const columns = mockColumns

  return (
    <section className={s.boardContent}>
      <ul className={s.columnList}>
        {mockColumns.map((column, index) => (
          <Column
            key={column.id}
            column={column}
            columnIndex={index}
          />
        ))}
      </ul>
    </section>
  )
})

BoardContent.displayName = 'BoardContent'
