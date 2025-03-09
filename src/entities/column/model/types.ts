import { ITask } from '@/entities/task'

export interface IColumn {
  id: string
  name: string
  color: string
  tasks: ITask[]
}

// COMPONENT TYPES
export interface ColumnProps {
  column: IColumn
  columnIndex: number
}

export interface ColumnInfoProps {
  name: string
  countTasks: number
}
