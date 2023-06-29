
import * as Server_Core from 'server/core'

import * as Server_Tour_Models from '../Models'


export const getAll = (): Promise<Server_Core.Models.Response<Server_Tour_Models.Tours>> => {
  return Server_Core.helpers.performRequest({
    method: 'GET',
    url: 'http://localhost:6500/api/v1/tours'
  })
}

export const get = (id: string): Promise<Server_Core.Models.Response<Server_Tour_Models.Tour>> => {
  return Server_Core.helpers.performRequest({
    method: 'GET',
    url: `http://localhost:6500/api/v1/tours/${id}`
  })
}