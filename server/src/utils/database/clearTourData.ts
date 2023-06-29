
import * as M from '../../Models'

export const clearTourData = async () => {
  try {
    await M.Tour.deleteMany()
  } catch(err) {
    console.log(err)
  }
}