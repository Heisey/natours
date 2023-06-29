
import * as React from 'react'

import * as State from 'store'

export const useStore = (): State.Root => React.useContext(State.Context)