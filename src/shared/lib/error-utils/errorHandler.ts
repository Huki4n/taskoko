import { ErrorStatus } from '@/shared/model/types'
import axios from 'axios'

export const errorHandler = (
  error: unknown
): ErrorStatus => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return error.response.data.status
    }
  }

  return 'UNKNOWN_ERROR'
}
