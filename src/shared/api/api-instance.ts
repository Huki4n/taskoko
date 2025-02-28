import { BASE_URL } from '@/shared/api/base-url'
import { errorHandler } from '@/shared/lib/error-utils/errorHandler'
import { IRefreshResponse } from '@/shared/model/types'
import axios, { CreateAxiosDefaults } from 'axios'

import {
  getAccessToken,
  removeAccessToken,
  saveTokenToStorage,
} from '../lib/token-utils/tokenStorage'

// DEFAULT AXIOS OPTIONS
const options: CreateAxiosDefaults = {
  baseURL: `${BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
}

// Axios for requests without login
export const axiosBase = axios.create(options)

// Axios for requests with login
export const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    if (
      error.response?.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      try {
        originalRequest._isRetry = true

        const result =
          await axiosBase.get<IRefreshResponse>(
            '/auth/refresh'
          )

        if (result.data && error.config) {
          saveTokenToStorage(result.data.accessToken)

          return axiosWithAuth.request({ ...error.config })
        }
      } catch (refreshError) {
        const errorCode = errorHandler(refreshError)

        if (
          errorCode === 'TOKEN_EXPIRED' ||
          errorCode === 'INVALID_TOKEN'
        ) {
          removeAccessToken()
        }
      }
    }

    return Promise.reject(error)
  }
)

axiosWithAuth.interceptors.request.use(config => {
  const accessToken = getAccessToken()

  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`

  return config
})
