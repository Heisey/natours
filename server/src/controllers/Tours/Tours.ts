
import express from 'express'

import * as Core from '../../core'
import * as M from '../../Models'
import * as Utils_Promise from '../../utils/promise'

import * as H_Tours from './helpers'

const excludedFields = ['page', 'sort', 'pageSize', 'fields']

export const getAll = Utils_Promise.catchAsync(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const query = { ...req.query }
 
  const querySort = req.query.sort as string

  const pageSize: number = req.query.pageSize ? +req.query.pageSize : 10

  const page: number = req.query.page ? +req.query.page : 1

  const documentsToSkip = (page - 1) * pageSize

  excludedFields.forEach(dataSet => delete query[dataSet])
  
  // query with fields
  let dbQuery = M.Tour.find(JSON.parse(H_Tours.generateQueryString(query)))
    
  // query sort
  if (querySort) dbQuery.sort(H_Tours.generateSortObj(querySort))
  else dbQuery.sort({ createdAt: -1 })
  
  // query page and size limit
  dbQuery.skip(documentsToSkip).limit(pageSize)

  const numOfDocuments = await M.Tour.countDocuments()

  if (req.query.page && (documentsToSkip > numOfDocuments))  throw new Error('This page does not exist')

  const tours = await dbQuery

  res.status(200).json({
    records: numOfDocuments,
    tours
  })
 })

export const get = Utils_Promise.catchAsync(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const tour = await M.Tour.findById(req.params.id).populate({
    path: 'guides',
    select: '-__v'
  })
  
  if (!tour) throw new Core.custom.GlobalError(`No tour found with id ${req.params.id}`, 404)
    
  res.status(200).json({
    tour
  })
})

export const create = Utils_Promise.catchAsync(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const Tour = await M.Tour.create(req.body)

  res.status(201).json({
    status: 'success',
    data: {
      tours: Tour
    }
  })
})

export const update = Utils_Promise.catchAsync(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const updateConfig = { 
    new: true,
    runValidators: true    
  }

  const tour = await M.Tour.findByIdAndUpdate(req.params.id, req.body, updateConfig)

  if (!tour) throw new Core.custom.GlobalError(`No tour found with id ${req.params.id}`, 404)
    
  res.status(200).json({
    status: 'success',
    data: {
      tours: tour
    }
  })
})

export const remove = Utils_Promise.catchAsync(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const tour = await M.Tour.findByIdAndDelete(req.params.id)

  if (!tour) throw new Core.custom.GlobalError(`No tour found with id ${req.params.id}`, 404)
    
  res.status(204).json({
    status: 'success'
  })
})
