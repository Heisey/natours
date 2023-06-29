
import * as Store_Tour from 'store/Tour'

export const tripDurationText = (tripDuration: Store_Tour.Models.Duration) => {
  switch (tripDuration) {
    case Store_Tour.keys.Duration.SHORT:
      return 'short'
    case Store_Tour.keys.Duration.MEDIUM:
      return 'medium'
    case Store_Tour.keys.Duration.LONG:
      return 'long'
    default:
      return 'any'
  }
}