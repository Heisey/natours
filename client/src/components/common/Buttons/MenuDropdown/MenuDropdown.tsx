
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import * as Collapse from 'components/common/Layout/Collapse'
import * as Text from 'components/common/Typography/Text'

import * as MenuButton from '../MenuButton'

import * as _M from './Props'
import * as Styles from './styles'

const MenuDropdown: React.FC<_M.Props> = (props) => {

  const location = ReactRouter.useLocation()
  const navigate = ReactRouter.useNavigate()

  const [open, openHandler] = React.useState(false)

  const toggleOpen = () => {
    if (!open) {
      openHandler(true)
      return navigate(props.buttonData.path)
    }
    else if (open && location.pathname !== props.buttonData.path) return navigate(props.buttonData.path)
    else openHandler(false)
  }

  const active = location.pathname === props.buttonData.path
  
  return (
    <Styles.MenuDropdown active={active ? 0 : 1}>
      <button onClick={toggleOpen}>
          {props.buttonData.icon}
          <Text.Component>{props.buttonData.label}</Text.Component>
      </button>
      <Collapse.Component open={open}>
        <ul>
          {props.options.map(dataSet => <MenuButton.Component key={`MenuDropdown_key_${Math.floor(Math.random() * 500)}`} {...dataSet} />)}
        </ul>
      </Collapse.Component>
    </Styles.MenuDropdown>
  )
}

export const Component = MenuDropdown