import {useForm} from "@tanstack/react-form";
import {Icon, Input} from "@/shared/ui";

import s from './Search.module.scss'


export const Search = () => {
  const form = useForm({
    defaultValues: {
      inputSearch: ''
    },
    asyncDebounceMs: 200,
    validators: {
     onChangeAsync: async ({value}) => {
       console.log(value)

       return null
     }
    },
    onSubmit: async ({value, formApi}) => {
      console.log(value.inputSearch)
      formApi.reset(value)
    }
  })

  return (
      <search className={s.search}>
        <form
            className={s.form}
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              form.handleSubmit()
            }}
        >
          <Icon
              src={'/assets/search_icon.svg'}
              alt={'Search'}
              size={18}
              className={'search'}
          />
          <form.Field
              name="inputSearch"
          >
            {(field) =>
                <Input
                    type="text"
                    name={field.name}
                    value={field.state.value}
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                    meta={field.state.meta}
                    className={'search'}
                    placeholder={"Search by name or by tag"}
                    size={25}
                />
            }
          </form.Field>
        </form>
      </search>
  );
};