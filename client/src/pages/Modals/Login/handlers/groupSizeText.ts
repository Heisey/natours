
import * as Store_Tour from 'store/Tour'

export const groupSizeText = (size: Store_Tour.Models.Size) => {
  switch(size) {
    case Store_Tour.keys.Size.LARGE:
      return 'large'
    case Store_Tour.keys.Size.MEDIUM:
      return 'medium'
    case Store_Tour.keys.Size.SMALL:
      return 'small'
    default:
      return 'any'
  }
}