// RESPONSE TYPES

// ERROR RESPONSE
export type ErrorStatus =
  | 'INVALID_TOKEN'
  | 'TOKEN_EXPIRED'
  | 'UNKNOWN_ERROR'

export interface IErrorResponse {
  status: ErrorStatus
  message: string
}

// REFRESH RESPONSE
export interface IRefreshResponse {
  status: string
  accessToken: string
}

// BASE RESPONSE
export interface IBaseResponse {
  status: string
  message: string
}
