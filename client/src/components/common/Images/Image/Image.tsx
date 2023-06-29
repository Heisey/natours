
import * as React from 'react'

import * as _M from './Props'
import * as STyles from './styles'

const Image: React.FC<_M.Props> = (props) => {

  return (
    <STyles.Image {...props} />
  )
}

export const Component = Image