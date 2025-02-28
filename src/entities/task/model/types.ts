import { IAssignee } from '@/entities/user'

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
}

export interface IComment {
  text: string
  createdAt: string
  authorId: string
}
