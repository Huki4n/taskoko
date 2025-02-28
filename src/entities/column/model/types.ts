import { ITask } from '@/entities/task'

export interface IColumn {
  id: string
  name: string
  color: string
  tasks: ITask[]
}
