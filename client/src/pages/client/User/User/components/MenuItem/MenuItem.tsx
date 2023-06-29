
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import * as Text from 'components/common/Typography/Text'

import * as _M from './Props'
import * as Styles from './styles'


const MenuItem: React.FC<_M.Props> = (props) => {

  const location = ReactRouter.useLocation()

  return (
    <Styles.MenuItem active={props.path === location.pathname}>
      <button onClick={props.onClick}>
        <Text.Component>
          {props.label}
        </Text.Component>
      </button>
    </Styles.MenuItem>
  )
}

export const Component = MenuItem