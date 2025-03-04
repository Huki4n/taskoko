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
  ({ tasks, color, columnId }: TaskListProps) => {
    const { editColumnId } = useEditTaskStore()
    const isEditColumn = editColumnId === columnId

    const containerRef = useRef<HTMLUListElement>(null)
    const [
      partiallyVisibleItems,
      setPartiallyVisibleItems,
    ] = useState<Set<number> | null>(null)

    // Мемоизация для IntersectionObserver callback
    const observerCallback = useCallback(
      (entries: IntersectionObserverEntry[]) => {
        const newPartiallyVisibleItems = new Set<number>()

        entries.forEach(entry => {
          if (
            entry.intersectionRatio > 0 &&
            entry.intersectionRatio < 1
          ) {
            const index = Number(
              entry.target.getAttribute('data-index')
            )

            newPartiallyVisibleItems.add(index)
          }
        })

        setPartiallyVisibleItems(newPartiallyVisibleItems)
      },
      []
    )

    useEffect(() => {
      const observer = new IntersectionObserver(
        observerCallback,
        {
          root: containerRef.current,
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      )

      const listItems = containerRef.current?.children

      if (listItems) {
        Array.from(listItems).forEach(item =>
          observer.observe(item)
        )
      }

      return () => {
        if (listItems) {
          Array.from(listItems).forEach(item =>
            observer.unobserve(item)
          )
        }
      }
    }, [observerCallback, tasks]) // добавлен observerCallback как зависимость

    // Мемоизация для handleScroll
    const handleScroll = useCallback(() => {
      const container = containerRef.current

      if (container) {
        const { scrollTop, scrollHeight, clientHeight } =
          container

        if (scrollTop + clientHeight >= scrollHeight - 10) {
          console.log('null')
          setPartiallyVisibleItems(null)
        }
      }
    }, []) // handleScroll не зависит от состояния или пропсов

    useEffect(() => {
      const container = containerRef.current

      container?.addEventListener('scroll', handleScroll, {
        passive: true,
      })

      return () => {
        container?.removeEventListener(
          'scroll',
          handleScroll
        )
      }
    }, [handleScroll]) // добавлен handleScroll как зависимость

    return (
      <ul
        className={cn(
          isEditColumn && s.taskListEditable,
          s.taskList
        )}
        ref={containerRef}
      >
        {(isEditColumn || editColumnId === '') &&
          tasks.map((task, index) => (
            <Task
              key={task.id}
              task={task}
              color={color}
              dataIndex={index}
              visibility={partiallyVisibleItems?.has(index)}
              columnId={columnId}
            />
          ))}
      </ul>
    )
  }
)

TaskListBlur.displayName = 'TaskListBlur'

interface TaskListProps {
  tasks: ITask[]
  color: string
  columnId: string
}
