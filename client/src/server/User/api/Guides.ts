
import * as Server_Core from 'server/core'
import * as Server_User from 'server/User'

export const getAll = (): Promise<Server_Core.Models.Response<Server_User.Models.User[]>> => {
  return Server_Core.helpers.performRequest({
    method: 'GET',
    url: 'http://localhost:6500/api/v1/admin/guides'
  })
}

export const create = (args: {
  email: string
  password: string
  token: string
  firstName: string
  lastName: string
}): Promise<Server_Core.Models.Response<void>> => {
  return Server_Core.helpers.performRequest({
    headers: {
      Authorization: `Bearer ${args.token}`
    },
    method: 'POST',
    url: 'http://localhost:6500/api/v1/admin/guides',
    data: args
  })
}