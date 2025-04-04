'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'

import { useGetProjects } from '@/entities/project'
import { useProjectsStore } from '@/entities/project/model/projectsStore'
import { AddProjectModal } from '@/features/project/add-project'
import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Button, Icon, P } from '@/shared/ui'
import cn from 'classnames'

import s from './ProjectsList.module.scss'

export const Projects = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const { setSelectedProjectId, selectedProjectId } =
    useProjectsStore()

  const { data: projects, isLoading } = useGetProjects()

  if (isLoading) {
    return null
  }

  return (
    <section className={s.projects}>
      <P size={'l'}>Projects</P>
      <ul className={s.projectList}>
        {projects?.map(project => (
          <li
            key={project.id}
            className={cn(
              s.listItem,
              project.id === selectedProjectId && s.active
            )}
            onClick={() => setSelectedProjectId(project.id)}
          >
            <Icon
              src={`${ASSETS_ICON_PATH}/placeholder_avatar`}
              size={22}
            />
            <P type={'bold'} size={'18'}>
              {project.name}
            </P>
          </li>
        ))}
      </ul>
      <Button
        icon={{
          name: 'plus',
          size: [15, 14],
        }}
        onClick={() => setShowModal(true)}
      >
        New project
      </Button>

      {showModal &&
        createPortal(
          <AddProjectModal
            setShowModal={setShowModal}
            showModal={showModal}
          />,
          document.getElementById('portal') as HTMLElement
        )}
    </section>
  )
}
