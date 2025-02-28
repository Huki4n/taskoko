import { axiosBase } from '@/shared/api/api-instance'
import { IBaseResponse } from '@/shared/model/types'

import { IRegisterRequest } from '../model/types'

export const registerApi = {
  baseKey: 'register',
  register: async (body: IRegisterRequest) => {
    return await axiosBase.post<IBaseResponse>(
      '/auth/register',
      body
    )
  },
}
