
import fs from 'fs'

import * as I from '../../interfaces'
import * as M from '../../Models'

const data: I.Tour[] = JSON.parse(fs.readFileSync('tours-simple.json', 'utf-8'))

export const tourSeedData = async () => {
  try {
    M.Tour.create(data)
  } catch (err) {
    console.log(err)
  }
}