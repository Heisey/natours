
import * as React from 'react' 
import * as ReactRouter from 'react-router-dom'

import * as Text from 'components/common/Typography/Text'

import * as _M from './Props'
import * as Styles from './styles'

const MenuButton: React.FC<_M.Props> = (props) => {

  const location = ReactRouter.useLocation()

  const active = location.pathname === props.path
  
  return (
    <Styles.MenuButton to={props.path} active={active ? 0 : 1}>
      {props.icon}
      <Text.Component>{props.label}</Text.Component>
    </Styles.MenuButton>
  )
}

export const Component = MenuButton