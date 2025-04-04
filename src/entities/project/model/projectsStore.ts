import { create } from 'zustand/react'

import { IProject } from '@/entities/project'

import { IProjectListItem } from './types'

interface ProjectsStore {
  projects: IProjectListItem[]
  selectedProjectId: string
  currentProject: IProject | null
  setProjects: (projects: IProjectListItem[]) => void
  setProject: (projects: IProject | undefined) => void
  setSelectedProjectId: (id: string) => void
}

export const useProjectsStore = create<ProjectsStore>(
  set => ({
    projects: [],
    selectedProjectId: '',
    currentProject: null,
    setProjects: (projects: IProjectListItem[]) => {
      return set({
        projects,
        selectedProjectId: projects[0].id,
      })
    },
    setProject: (project: IProject | undefined) =>
      set({ currentProject: project }),
    setSelectedProjectId: (id: string) =>
      set({ selectedProjectId: id }),
  })
)
