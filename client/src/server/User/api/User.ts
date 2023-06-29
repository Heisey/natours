
import * as Server_Core from 'server/core'

import * as M_User from '../Models'

interface CreateArgs {
  data: M_User.User
  token: string
}

export const create = async (args: CreateArgs) => {
  const response = await Server_Core.helpers.performRequest<M_User.User>({
    headers: {
      Authorization: `Bearer ${args.token}`
    },
    method: 'Post',
    url: 'http://localhost:6500/api/v1/users',
    data: args.data
  })

  if (response.status !== 201) throw new Error('Could not create user')

  return response.data
}

interface LoginArgs {
  email: string
  token: string
}

export const login = async (args: LoginArgs) => {
  const response = await Server_Core.helpers.performRequest<M_User.User>({
    headers: {
      Authorization: `Bearer ${args.token}`
    },
    method: 'POST',
    url: 'http://localhost:6500/api/v1/users/signin',
    data: {
      email: args.email
    }
  }) 

  if (!response.data) throw new Error('Could not login user') 

  return response.data
}

interface UserExist {
  exists: boolean
}

export const doesUserExist = async (email: string) => {
  const response = await Server_Core.helpers.performRequest<UserExist>({
    method: 'GET',
    url: `http://localhost:6500/api/v1/users/exists/${email}`
  })

  return response.data.exists
}