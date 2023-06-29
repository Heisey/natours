
import * as React from 'react'

import * as App from 'App'
import * as Button from 'components/common/Buttons/Button'
import * as PasswordInput from 'components/common/Inputs/Password'
import * as TextInput from 'components/common/Inputs/Text'
import * as Heading from 'components/common/Typography/Heading'
import * as Text from 'components/common/Typography/Text'

import * as C_Login from '../../config'
import * as Ctx_Login from '../../context'

import * as Styles from './styles'

const Login = () => {

  const appCtx = App.Ctx.useContext()
  const LoginCtx = Ctx_Login.useContext()

  const [email, emailHandler] = React.useState('')
  const [password, passwordHandler] = React.useState('')


  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => emailHandler(e.currentTarget.value)
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => passwordHandler(e.currentTarget.value)

  const onLogin = async () => {
    try {
      await LoginCtx.loginUser({ email, password })
      appCtx.toggleLoginModal()
    }
    catch (err) {
      console.log('login fail, ', err)
    }
  }

  const updatePage = () => {
    LoginCtx.updatePage(C_Login.Page.Create)
  }

  return (
    <Styles.Login>
      <Heading.Component variant='h4'>Sign in to Natours</Heading.Component>
      <Styles.Inputs>
        <TextInput.Component 
          label='Enter email address'
          name='email'
          type='email'
          required={LoginCtx.loginEmail === undefined}
          onChange={handleEmail}
        />
        <PasswordInput.Component label='password' name='password' value={password} onChange={handlePassword} />
      </Styles.Inputs>
      <Button.Component
        onClick={onLogin}
      >
        Submit
      </Button.Component>
      <Styles.Footer>
        <Text.Component>
          Don not have a account?
        </Text.Component>
        <Text.Component
          onClick={updatePage}
        >
          Sign up
        </Text.Component>
      </Styles.Footer>
    </Styles.Login>
  )
}

export const Component = Login