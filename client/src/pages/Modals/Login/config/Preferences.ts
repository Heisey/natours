
import * as Store_Tour from 'store/Tour'

import * as M_Login from '../Models'

export const Preferences: M_Login.Preferences = {
  groupSize: Store_Tour.keys.Size.ANY,
  tripDuration: Store_Tour.keys.Duration.ANY,
  environment: Store_Tour.keys.Environment.ANY
}