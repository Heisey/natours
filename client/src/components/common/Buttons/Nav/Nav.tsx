
import * as React from 'react'

import * as App from 'App'
import * as Hamburger from 'components/common/Buttons/Hamburger'

import * as _M from './Props'
import * as Styles from './styles'

const Nav: React.FC<_M.Props> = (props) => {

  const appCtx = App.Ctx.useContext()

  return (
    <Styles.Nav
      onClick={appCtx.toggleNav}
      className={props.className}
    >
      <Hamburger.Component 
        isOpen={appCtx.navOpen}
      />
    </Styles.Nav>
  )
}

export const Component = Nav