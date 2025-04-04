import { IAssignee } from '@/entities/user'

// GLOBAL TYPES
export interface ITask {
  id: string
  name: string
  type: string
  description: string
  tags: string[]
  timer: string
  image: string
  subtasks: ISubtask[]
  attachments: IAttachment[]
  comments: IComment[]
  users: IAssignee[]
  isDone: boolean
}

export interface ISubtask {
  id: string
  name: string
  description: string
  users: IAssignee[]
  isDone: boolean
}

export interface IAttachment {
  id: string
  fileUrl: string
  fileName: string
}

export interface IComment {
  text: string
  createdAt: string
  author: IAssignee
}

// API TYPES

// TODO: write right types
export interface ITaskEditRequest {
  tags: string[]
  timer: string
  image: string
  subtasks: ISubtask[]
  attachments: IAttachment[]
  comments: IComment[]
  users: IAssignee[]
  isDone: boolean
}

export interface ITaskCreateRequest {
  name: string
  type: string
  description: string
  tags: string[]
  timer: string
  image: string
  subtasks: ISubtask[]
  attachments: IAttachment[]
  comments: IComment[]
  users: IAssignee[]
}


// UI COMPONENT TYPES
export interface TaskProps {
  task: ITask
  color: string
  dataIndex: number
  visibility: boolean | undefined
  columnId: string
}

export type BaseTaskEditProps = {
  task: ITask
  editTask: () => void
  // type: 'base' | 'edit'
}

export type TaskImageProps = Pick<ITask, 'image'> & {
  type: 'edit' | 'base'
}

export interface TaskAdditionalInfoProps {
  subtasks: ISubtask[]
  comments: IComment[]
  attachments: IAttachment[]
}
