
import fs from 'fs'
import path from 'path'

import * as I from '../../interfaces'
import * as M from '../../Models'

const Path = path.join(__dirname, "../../../src/data/tours.json")

const data: I.Tour[] = JSON.parse(fs.readFileSync(Path, 'utf-8'))

export const importTourSeedData = async () => {
  try {
    M.Tour.create(data)
  } catch (err) {
    console.log(err)
  }
}