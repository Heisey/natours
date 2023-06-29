
import * as Server_Core from 'server/core'

interface Guide {
  role: string
  firstName: string
  lastName: string
  _id: string
  email: string
}

interface Data {
  records: Guide[]
}

export const getAll = (): Promise<Server_Core.Models.Response<Data>> => {

  return Server_Core.helpers.performRequest({
    method: 'GET',
    url: 'http://localhost:6500/api/v1/guides'
  })
}