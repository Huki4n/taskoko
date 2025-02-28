import { IColumn } from '@/entities/column'

export interface IUser {
  id: string
  name: string
  email: string
  avatar_url: string
  projects: IProject[]
}

export interface IProject {
  id: string
  name: string
  columns: IColumn[]
  users: IAssignee[]
}

export type IAssignee = Pick<
  IUser,
  'id' | 'name' | 'avatar_url'
>
