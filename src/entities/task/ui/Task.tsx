import { CSSProperties } from 'react'

import { Icon, P } from '@/shared/ui'

import { ITask } from '../model/types'

import s from './Task.module.scss'

export const Task = ({ task, color }: TaskProps) => {
  const countDoneSubtask = task.subtasks.filter(
    subtask => subtask.isDone
  ).length

  return (
    <li
      className={s.task}
      style={
        { '--base-task-color': color } as CSSProperties
      }
    >
      <div className={s.assignee} />

      <P>{task.type}</P>
      <P type={'bold'}>{task.name}</P>
      <P>{task.description}</P>

      <div className={s.additionalInfo}>
        <ul className={s.tags}>
          {task.tags.map((tag, index) => (
            <li key={index} className={s.tag}>
              <P>#{tag}</P>
            </li>
          ))}
        </ul>

        <div className={s.icons}>
          <div>
            <Icon src={''} size={0} />
            <P>
              {countDoneSubtask}/{task.subtasks.length}
            </P>
          </div>
          <div>
            <Icon src={''} size={0} />
            <P>{task.comments.length}</P>
          </div>
          <div>
            <Icon src={''} size={0} />
            <P>{task.attachments.length}</P>
          </div>
          <div>
            <Icon src={''} size={0} />
            <P>{task.timer}</P>
          </div>
        </div>
      </div>
    </li>
  )
}

interface TaskProps {
  task: ITask
  color: string
}
