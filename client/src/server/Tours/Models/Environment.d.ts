
import * as Server_Tours_Keys from '../keys'

export type Environment =
    typeof Server_Tours_Keys.Environment.OCEAN
  | typeof Server_Tours_Keys.Environment.FOREST
  | typeof Server_Tours_Keys.Environment.SNOW
  | typeof Server_Tours_Keys.Environment.SAND
  | typeof Server_Tours_Keys.Environment.URBAN