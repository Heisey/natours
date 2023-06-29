
import * as React from 'react'

// import * as Button from 'components/Buttons/Button'
// import * as TextInput from 'components/Inputs/Text'
// import * as Heading from 'components/Typography/Heading'
// import * as Text from 'components/Typography/Text'
// import * as Hooks from 'hooks'

import * as C_Login from './config'
import * as Ctx_Login from './context'
import * as CreatePage from './layout/Create'
import * as LoginPage from './layout/Login'

import * as Styles from './styles'

const Login: React.FC = () => {

  const LoginCtx = Ctx_Login.useContext()

  return (
    <Styles.Login>
      {LoginCtx.page === C_Login.Page.Login && <LoginPage.Component />}
      {LoginCtx.page === C_Login.Page.Create && <CreatePage.Component />}
    </Styles.Login>
  )
}

export const Component = Login