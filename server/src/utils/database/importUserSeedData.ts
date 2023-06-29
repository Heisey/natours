
import fs from 'fs'
import path from 'path'

import * as I from '../../interfaces'
import * as M from '../../Models'

const Path = path.join(__dirname, "../../../src/data/users.json")

const data: I.User[] = JSON.parse(fs.readFileSync(Path, 'utf-8'))

export const importUserSeedData = async () => {
  try {
    M.User.create(data)
  } catch (err) {
    console.log(err)
  }
}