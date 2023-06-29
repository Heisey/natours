
import * as React from 'react'

import *  as Core from 'core'

import * as _M from './Props'
import * as Styles from './styles'

const Overlay: React.FC<_M.Props> = (props) => {

  return (
    <Styles.Overlay 
      zIndex={props.index!}
      colorTheme={props.colorTheme!}
      className={props.className}
      img={props.img}
    />
  )
}

Overlay.defaultProps = {
  index: -1,
  colorTheme: Core.config.tourCategories.forest
}

export const Component = Overlay