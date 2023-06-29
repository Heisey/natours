
import mongoose from 'mongoose'

export const generateSortObj = (query: string) => {
  const sortFields = query.split(',')

  const sortObj: { [key: string]: mongoose.SortOrder} = {}

  sortFields.map(field => sortObj[field] = 1)

  return sortObj
}