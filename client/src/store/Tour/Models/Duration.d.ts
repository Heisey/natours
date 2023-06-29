
import * as K_User from '../keys'

export type Duration = 
    typeof K_User.Duration.ANY
  | typeof K_User.Duration.SHORT
  | typeof K_User.Duration.MEDIUM
  | typeof K_User.Duration.LONG
