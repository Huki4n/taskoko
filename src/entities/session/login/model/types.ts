export interface ILoginRequest {
  email: string
  password: string
}

export interface ILoginResponse {
  status: string
  accessToken: string
}
