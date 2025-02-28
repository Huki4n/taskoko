import { useForm } from '@tanstack/react-form'

import { ASSETS_ICON_PATH } from '@/shared/api/base-url'
import { Icon, Input } from '@/shared/ui'

import s from './Search.module.scss'

export const Search = () => {
  const form = useForm({
    defaultValues: {
      inputSearch: '',
    },
    asyncDebounceMs: 200,
    validators: {
      onChangeAsync: async ({ value }) => {
        console.log(value)

        return null
      },
    },
    onSubmit: async ({ value, formApi }) => {
      console.log(value.inputSearch)
      formApi.reset(value)
    },
  })

  return (
    <search className={s.search}>
      <form
        className={s.form}
        onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <Icon
          src={`${ASSETS_ICON_PATH}/search_icon`}
          alt={'Search'}
          size={18}
          opacity={30}
        />
        <form.Field name={'inputSearch'}>
          {field => (
            <Input
              type={'text'}
              name={field.name}
              value={field.state.value}
              onChange={field.handleChange}
              onBlur={field.handleBlur}
              error={field.state.meta}
              className={'search'}
              placeholder={'Search by name or by tag'}
              size={25}
            />
          )}
        </form.Field>
      </form>
    </search>
  )
}
