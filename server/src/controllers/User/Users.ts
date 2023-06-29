
import express from 'express'

import * as Data from '../../data'
import * as Core from '../../core'
// import * as I from '../../interfaces'
import * as M from '../../Models'
// import * as Utils_Promise from '../../utils/promise'

export const getAll = (req: express.Request, res: express.Response, next: express.NextFunction) => {

  res.status(200).json({
    status: 'success',
    records: Data.users.length,
    data: {
      users: Data.users
    }
  })
}

export const get = (req: express.Request, res: express.Response, next: express.NextFunction) => {

  // const id = +req.params._id

  res.status(200).json({
    status: 'success',
  })
}

export const create = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const user = await M.User.create(req.body.info)
    
    console.log('user, ', user)
    res.status(201).json({
      status: 'success',
      data: {
        user
      }
    })
  }
  catch (err) {
    console.log('puppy error, ', err)
    res.status(500).json({
      status: 'failed',
      error: err
    })
  }
}

export const update = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  
  // const id = +req.params.id 

  res.status(200).json({
    status: 'success'
  })
}

export const remove = (req: express.Request, res: express.Response, next: express.NextFunction) => {

  res.status(204).json({
    status: 'success'
  })
}

export const doesUserExist = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  
  const email = req.params.email
  const exists = await M.User.findOne({ email })
  
  if (!exists) return res.status(200).json({ exists: false })
  
  res.status(200).json({
    exists: true
  })
}