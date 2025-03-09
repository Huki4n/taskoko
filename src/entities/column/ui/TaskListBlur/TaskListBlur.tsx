import {
  memo,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react'

import {
  ITask,
  Task,
  useEditTaskStore,
} from '@/entities/task'
import cn from 'classnames'

import s from './TaskListBlur.module.scss'

export const TaskListBlur = memo(
  ({
    tasks,
    color,
    columnId,
    columnIndex,
  }: TaskListProps) => {
    const { editColumnId, editTaskId } = useEditTaskStore()
    const isEditColumn = editColumnId === columnId

    const listRef = useRef<HTMLUListElement>(null)
    const [maskTop, setMaskTop] = useState(false)
    const [maskBottom, setMaskBottom] = useState(false)
    const [
      partiallyVisibleItems,
      setPartiallyVisibleItems,
    ] = useState<Set<number> | null>(null)

    // // Мемоизация для IntersectionObserver callback
    // const observerCallback = useCallback(
    //   (entries: IntersectionObserverEntry[]) => {
    //     const newPartiallyVisibleItems = new Set<number>()
    //
    //     entries.forEach(entry => {
    //       console.log(entry)
    //
    //       if (
    //         entry.intersectionRatio > 0 &&
    //         entry.intersectionRatio < 1
    //       ) {
    //         const index = Number(
    //           entry.target.getAttribute('data-index')
    //         )
    //
    //         newPartiallyVisibleItems.add(index)
    //       }
    //     })
    //
    //     setPartiallyVisibleItems(newPartiallyVisibleItems)
    //   },
    //   []
    // )
    //
    // useEffect(() => {
    //   const observer = new IntersectionObserver(
    //     observerCallback,
    //     {
    //       root: listRef.current,
    //       threshold: [0, 1],
    //     }
    //   )
    //
    //   const listItems = listRef.current?.children
    //
    //   if (listItems) {
    //     Array.from(listItems).forEach(item =>
    //       observer.observe(item)
    //     )
    //   }
    //
    //   return () => {
    //     if (listItems) {
    //       Array.from(listItems).forEach(item =>
    //         observer.unobserve(item)
    //       )
    //     }
    //   }
    // }, [observerCallback, tasks]) // добавлен observerCallback как зависимость

    // Мемоизация для handleScroll
    const handleScroll = useCallback(() => {
      if (!listRef.current) return
      const { scrollTop, scrollHeight, clientHeight } =
        listRef.current

      setMaskTop(scrollTop > 0)
      setMaskBottom(
        scrollTop + clientHeight < scrollHeight - 10
      )
    }, [])

    useEffect(() => {
      const list = listRef.current

      list?.addEventListener('scroll', handleScroll, {
        passive: true,
      })
      handleScroll()

      return () => {
        list?.removeEventListener('scroll', handleScroll)
      }
    }, [handleScroll])

    return (
      <div
        className={cn(isEditColumn && s.taskListEditable)}
      >
        {editColumnId === columnId && editTaskId && (
          <div className={s.editTaskBlock}>
            <Task
              key={editTaskId}
              task={
                tasks.find(task => task.id === editTaskId)!
              }
              color={color}
              columnId={columnId}
              dataIndex={1000}
              visibility={undefined}
            />
          </div>
        )}

        <div className={s.listContainer}>
          <ul className={s.taskList} ref={listRef}>
            {(isEditColumn || editColumnId === '') &&
              tasks
                .filter(task => task.id !== editTaskId)
                .map((task, index) => (
                  <Task
                    key={task.id}
                    task={task}
                    color={color}
                    dataIndex={columnIndex * 100 + index}
                    visibility={partiallyVisibleItems?.has(
                      columnIndex * 100 + index
                    )}
                    columnId={columnId}
                  />
                ))}
          </ul>

          <div
            className={cn(s.maskTop, maskTop && s.show)}
          />
          <div
            className={cn(
              s.maskBottom,
              maskBottom && s.show
            )}
          />
        </div>
      </div>
    )
  }
)

TaskListBlur.displayName = 'TaskListBlur'

interface TaskListProps {
  tasks: ITask[]
  color: string
  columnId: string
  columnIndex: number
}
