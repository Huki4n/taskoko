import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {getAccessToken} from "../lib/token-utils";
// import {handleApiError} from "../helpers/handleApiError";

export const BASE_URL_T = process.env.NEXT_PUBLIC_API_URL;

class ApiError extends Error {
  constructor(public response: AxiosResponse) {
    super('ApiError' + response.status + response.statusText);
  }
}

const axiosWithAuth = axios.create({
  baseURL: `${BASE_URL_T}/api`,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
})

axiosWithAuth.interceptors.request.use(config => {
  const accessToken = getAccessToken();

  if(config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`

  return config
})


export const apiWithAuth= async <T>(
    url: string,
    init?: AxiosRequestConfig
) => {
  const result= await axiosWithAuth<T>(url, init)

  if(result.status !== 200 ){
    // handleApiError(result as unknown as AxiosError)
    throw new ApiError(result)
  }

  return result
}

const axiosBase = axios.create({
  baseURL: `${BASE_URL_T}/api`,
  method: 'POST',
})

export const apiBase= async <T>(
    url: string,
    init?: AxiosRequestConfig
) => {
  const result= await axiosBase<T>(url, init)

  if(result.status !== 200 ){
    // handleApiError(result as unknown as AxiosError)
    throw new ApiError(result)
  }

  return result
}