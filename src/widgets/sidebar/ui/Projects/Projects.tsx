import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Button, Icon, P } from '@/shared/ui'
import cn from 'classnames'

import s from './Projects.module.scss'

export const Projects = () => {
  const projects = [
    {
      id: crypto.randomUUID(),
      name: 'Habbit',
      image: 'blue',
      active: true,
    },
    {
      id: crypto.randomUUID(),
      name: 'Taskoko',
      image: 'red',
      active: false,
    },
    {
      id: crypto.randomUUID(),
      name: 'WITM',
      image: 'yellow',
      active: false,
    },
  ]

  return (
    <section className={s.projects}>
      <P size={'l'}>Projects</P>
      <ul className={s.projectList}>
        {projects.map(project => (
          <li
            key={project.id}
            className={cn(
              s.listItem,
              project.active && s.active
            )}
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
        onClick={() => console.log('click')}
      >
        New project
      </Button>
    </section>
  )
}
