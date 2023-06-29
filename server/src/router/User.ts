
import express from 'express'

import * as Controllers from '../controllers'
import * as Middleware from '../middleware'

export const User = express.Router()


User
  .route('/exists/:email')
  .get(Controllers.Users.User.doesUserExist)

User
  .route('/signin')
  .post(Middleware.Auth.isAuthorized, Controllers.Auth.signIn)

User
  .route('/:id')
  .get(Controllers.Users.User.get)
  .patch(Controllers.Users.User.update)
  .delete(Controllers.Users.User.remove)
  
User
  .route('/')
  .get(Controllers.Users.User.getAll)