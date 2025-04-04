import { IColumn } from '@/entities/column'
import { IAssignee } from '@/entities/user'


// GLOBAL TYPES
export type IProject = {
  id: string
  name: string
  image: string
  columns: IColumn[]
  users: IAssignee[]
}

// API TYPES
export interface CreateProjectRequest {
  projectName: string
}

// COMPONENT TYPES
export type IProjectListItem = Omit<IProject, 'columns'>

