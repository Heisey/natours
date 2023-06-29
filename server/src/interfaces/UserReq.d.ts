
import * as express from 'express'

import * as I from './'

export interface UserReq extends express.Request {
  user?: I.User
}