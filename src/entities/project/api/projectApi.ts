import { IProject } from '@/entities/project'
import { axiosWithAuth } from '@/shared/api/api-instance'

import {
  CreateProjectRequest,
  IProjectListItem,
} from '../model/types'

export const projectApi = {
  baseKey: 'project',
  createProject: async (body: CreateProjectRequest) => {
    return await axiosWithAuth.post<IProject>(
      '/project/create-project',
      body
    )
  },
  getProjects: async () => {
    return await axiosWithAuth.get<IProjectListItem[]>(
      '/project/get-projects'
    )
  },
  getProjectById: async (id: string) => {
    return await axiosWithAuth.get<IProject>(
      `/project/get-project/${id}`
    )
  },
  deleteProject: async (id: string) => {
    return await axiosWithAuth.delete(
      `/project/delete-project/${id}`
    )
  },
}
