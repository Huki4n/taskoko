import { IProject } from '@/entities/project'

export interface IUser {
  id: string
  name: string
  email: string
  avatarUrl: string
  projects: IProject[]
}

export type IAssignee = Pick<
  IUser,
  'id' | 'name' | 'avatarUrl'
>
