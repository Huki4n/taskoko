import { axiosBase } from '@/shared/api/api-instance'

import {
  ILoginRequest,
  ILoginResponse,
} from '../model/types'

export const loginApi = {
  baseKey: 'login',
  login: async (body: ILoginRequest) => {
    return await axiosBase.post<ILoginResponse>(
      '/auth/login',
      body
    )
  },
}
