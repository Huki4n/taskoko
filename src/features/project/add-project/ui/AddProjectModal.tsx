import { useForm } from '@tanstack/react-form'
import { FormEvent, MouseEvent } from 'react'

import { useCreateProject } from '@/entities/project/lib/project-hooks'
import { CreateProjectRequest } from '@/entities/project/model/types'
import { Button, Input, ModalOverlay } from '@/shared/ui'

import s from './AddProjectModal.module.scss'

export const AddProjectModal = ({
  setShowModal,
  showModal,
}: AddProjectModalProps) => {
  const createProjectMutation = useCreateProject()

  const createProjectForm = useForm<CreateProjectRequest>({
    onSubmit: ({ value }) =>
      createProjectMutation.mutate(value),
  })

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    e.stopPropagation()
    await createProjectForm.handleSubmit()

    setShowModal(false)
  }

  const handleFormClick = (
    e: MouseEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <ModalOverlay
      setShowModal={setShowModal}
      showModal={showModal}
    >
      <form
        onSubmit={handleSubmit}
        className={s.form}
        onMouseUp={handleFormClick}
      >
        <div className={s.input}>
          <createProjectForm.Field name={'projectName'}>
            {field => (
              <Input
                type={'text'}
                label={'Project name'}
                name={field.name}
                value={field.state.value}
                onChange={field.handleChange}
                error={field.state.meta}
                placeholder={'Name'}
                textColor={'white'}
              />
            )}
          </createProjectForm.Field>
        </div>
        <Button
          type={'submit'}
          className={'full'}
          typeButton={'submit'}
          fontSize={15}
        >
          Create project
        </Button>
      </form>
    </ModalOverlay>
  )
}

interface AddProjectModalProps {
  setShowModal: (showModal: boolean) => void
  showModal: boolean
}
