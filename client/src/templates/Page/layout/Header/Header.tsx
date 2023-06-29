
import * as MxReact from 'mobx-react'
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import * as Images from 'assets/images'
// import * as LoginButton from 'components/abstract/Buttons/Login'
// import * as ProfileButton from 'components/abstract/Buttons/Profile'
import * as NavButton from 'components/common/Buttons/Nav'
import * as Image from 'components/common/Images/Image'
// import * as Hooks from 'hooks'

import * as Styles from './styles'

const Header: React.FC = () => {
  const navigate = ReactRouter.useNavigate()
  // const RootState = Hooks.Common.useStore()

  const goToHome = () => navigate('/')
  return (
    <Styles.Header>
      <Image.Component className='logo' src={Images.logo_green_2x} onClick={goToHome} />
      {/* {RootState.auth.isAuthorized && <ProfileButton.Component />}
      {!RootState.auth.isAuthorized && <LoginButton.Component />} */}
      <NavButton.Component className='nav' />
    </Styles.Header>
  )
}

export const Component = MxReact.observer(Header)