
import * as MxReact from 'mobx-react'
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

// import * as LoginButton from 'components/abstract/Buttons/Login'
// import * as ProfileButton from 'components/abstract/Buttons/Profile'
import * as NavButton from 'components/common/Buttons/Nav'
// import * as Hooks from 'hooks'

import * as Styles from './styles'

const Header: React.FC = () => {
  
  const location = ReactRouter.useLocation()
  // const RootState = Hooks.Common.useStore()

  // const renderLoginButton = () => {
  //   if (RootState.auth.isAuthorized) return <ProfileButton.Component />
  //   return <LoginButton.Component />
  // }

  return (
    <Styles.Header>
      {/* only shown if on root path */}
      {location.pathname === '/' && <NavButton.Component />}
      {/* {location.pathname === '/' && renderLoginButton()} */}

    </Styles.Header>
  )
}

export const Component = MxReact.observer(Header)