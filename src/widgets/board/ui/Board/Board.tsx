'use client'

import { memo } from 'react'

import { BoardContent } from '../BoardContent/BoardContent'
import { BoardUsers } from '../BoardUsers/BoardUsers'
import { BoardViews } from '../BoardViews/BoardViews'

import s from './Board.module.scss'

export const Board = memo(() => {
  return (
    <section className={s.board}>
      <div className={s.boardHeader}>
        <BoardViews />
        <BoardUsers />
      </div>

      <BoardContent />
    </section>
  )
})

Board.displayName = 'Board'
