
import * as I from '../../../interfaces'

export const generateQueryString = (query: I.Query) => {
  
  let queryString = JSON.stringify(query)

  queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, (str) => `$${str}`)

  return queryString
}