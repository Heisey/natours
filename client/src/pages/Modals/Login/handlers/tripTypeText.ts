
import * as Store_Tour from 'store/Tour'

export const tripTypeText = (data: Store_Tour.Models.Environment) => {
  switch(data) {
    case Store_Tour.keys.Environment.FOREST:
      return 'forest'
    case Store_Tour.keys.Environment.OCEAN:
      return 'ocean'
    case Store_Tour.keys.Environment.SNOW:
      return 'snow'
    default:
      return 'any'
  }
}