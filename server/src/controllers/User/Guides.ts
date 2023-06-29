
import express from 'express'

import * as M from '../../Models'
import * as Services from '../../services'
import * as Utils_Promise from '../../utils/promise'

export const getAll = Utils_Promise.catchAsync(async (req: express.Request, res: express.Response, next: express.NextFunction) => {

  const config = {
    role: ['guide' , 'lead-guide']
  }

  const documents = await M.User.find(config)

  res.status(200).json({
    users: documents
  })
})

export const create = Utils_Promise.catchAsync(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const data = req.body
  console.log('puppy start 1', data)
  await Services.firebase.auth().createUser({
    email: data.email,
    password: data.password
  })
  .catch(err => console.log(err)) 
  
  const user = M.User.create({
    ...data
  })

  

  res.status(200).json({
    user
  })
})