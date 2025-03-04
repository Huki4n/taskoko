import { IColumn } from '@/entities/column'

export interface IUser {
  id: string
  name: string
  email: string
  avatarUrl: string
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
  'id' | 'name' | 'avatarUrl'
>
