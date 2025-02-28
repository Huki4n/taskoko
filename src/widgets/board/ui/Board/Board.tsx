'use client'

import { BoardContent } from '../BoardContent/BoardContent'
import { BoardUsers } from '../BoardUsers/BoardUsers'
import { BoardViews } from '../BoardViews/BoardViews'

import s from './Board.module.scss'

export const Board = () => {
  return (
    <section className={s.board}>
      <div className={s.boardHeader}>
        <BoardViews />
        <BoardUsers />
      </div>

      <BoardContent />
    </section>
  )
}
