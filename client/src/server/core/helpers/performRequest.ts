
import Axios, { AxiosPromise, AxiosRequestConfig } from 'axios'

export function performRequest<T = any>(config: AxiosRequestConfig): AxiosPromise<T>  {
  return Axios(config)
}