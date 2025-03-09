import { TaskAdditionalInfoProps } from '@/entities/task'
import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Button, Icon, P } from '@/shared/ui'
import cn from 'classnames'

import s from './TaskAdditionalInfo.module.scss'

export const TaskAdditionalInfo = ({
  subtasks,
  attachments,
  comments,
}: TaskAdditionalInfoProps) => {
  const countDoneSubtask = subtasks.filter(
    subtask => subtask.isDone
  ).length

  return (
    <div className={s.taskAdditionalInfo}>
      <div className={s.subtasks}>
        <div className={s.icon}>
          <Icon
            src={`${ASSETS_ICON_PATH}/list`}
            size={16}
          />
          <P>
            {countDoneSubtask}/{subtasks.length}
          </P>
        </div>
        <ul className={s.subtasksList}>
          {subtasks.map(subtask => (
            <li
              className={cn(
                s.subtasksItem,
                subtask.isDone && s.subtasksItemDone
              )}
              key={subtask.id}
            >
              <P size={'s'}>{subtask.name}</P>
            </li>
          ))}
        </ul>
        <Button
          icon={{
            name: 'plus',
            size: 16,
          }}
          fontSize={14}
        >
          New Subtask
        </Button>
      </div>

      <div className={s.comments}>
        <div className={s.icon}>
          <Icon
            src={`${ASSETS_ICON_PATH}/comment`}
            size={16}
          />
          <P>{comments.length}</P>
        </div>
        <ul className={s.commentsList}>
          {comments.map((comment, index) => (
            <li className={s.commentsItem} key={index}>
              <div className={s.commentsItemAvatar}>
                <Icon
                  src={`${ASSETS_ICON_PATH}/placeholder_avatar`}
                  size={24}
                />
              </div>
              <P color={'black'} size={'s'}>
                {comment.text}
              </P>
            </li>
          ))}
        </ul>
        <div className={s.commentsListBorder} />
        <Button
          icon={{
            name: 'plus',
            size: 16,
          }}
          fontSize={14}
        >
          New Comment
        </Button>
      </div>

      <div className={s.attachments}>
        <div className={s.icon}>
          <Icon
            src={`${ASSETS_ICON_PATH}/attach`}
            size={16}
          />
          <P>{attachments.length}</P>
        </div>
        <ul className={s.attachmentsList}>
          {attachments.map(attachment => (
            <li
              className={s.attachmentsItem}
              key={attachment.id}
            >
              <P size={'s'}>{attachment.fileName}</P>
            </li>
          ))}
        </ul>
        <Button
          icon={{
            name: 'plus',
            size: 16,
          }}
          fontSize={14}
        >
          New Attachment
        </Button>
      </div>
    </div>
  )
}
