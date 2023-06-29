
import * as React from 'react'

import * as App from 'App'

import * as _M from './Props'
import * as Styles from './styles'

const Login: React.FC<_M.Props> = (props) => {
  
  const appCtx = App.Ctx.useContext()

  return (
    <Styles.Login
      {...props}
      buttonTheme='light'
      onClick={appCtx.toggleLoginModal}
    >
      Login
    </Styles.Login>
  )
}

export const Component = Login