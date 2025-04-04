import {
  useMutation,
  useQuery,
} from '@tanstack/react-query'

import { projectApi } from '@/entities/project/api/projectApi'

import { useProjectsStore } from '../model/projectsStore'

export const useGetProjects = () => {
  const { setProjects } = useProjectsStore()

  const getProjectsQuery = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await projectApi.getProjects()

      if (response.status === 200) {
        setProjects(response.data)
      }

      return response.data
    },
  })

  return getProjectsQuery
}

export const useGetProject = (id: string) => {
  const { setProject } = useProjectsStore()

  const getProjectQuery = useQuery({
    queryKey: ['project', id],
    queryFn: async ({ queryKey }) => {
      if (queryKey[1]) {
        const response = await projectApi.getProjectById(
          queryKey[1]
        )

        if (response.status === 200) {
          setProject(response.data)
        }

        return response.data
      }
    },
    enabled: !!id,
  })

  return getProjectQuery
}

export const useCreateProject = () => {
  return useMutation({
    mutationKey: ['create-project'],
    mutationFn: projectApi.createProject,
  })
}

export const useDeleteProject = () => {
  return useMutation({
    mutationKey: ['delete-project'],
    mutationFn: projectApi.deleteProject,
  })
}
