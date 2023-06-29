
import * as React from 'react'

import * as Email from 'components/abstract/Inputs/Email'
import * as Name from 'components/abstract/Inputs/Name'
import * as Password from 'components/abstract/Inputs/Password'
import * as Button from 'components/common/Buttons/Button'
import * as PasswordInput from 'components/common/Inputs/Password'

import * as Heading from 'components/common/Typography/Heading'

import * as C_Login from '../../config'
import * as Ctx from '../../context'

import * as _M from './Props'
import * as Styles from './styles'

const UserData: React.FC<_M.Props> = (props) => {

  const context = Ctx.useContext()

  const [firstName, firstNameHandler] = React.useState<string | undefined>(context.userData.firstName)
  const [firstNameError, firstNameErrorHandler] = React.useState(false)

  const [lastName, lastNameHandler] = React.useState<string | undefined>(context.userData.lastName)
  const [lastNameError, lastNameErrorHandler] = React.useState(false)

  const [email, emailHandler] = React.useState<string | undefined>(context.userData.email)
  const [emailError, emailErrorHandler] = React.useState(false)

  const [password, passwordHandler] = React.useState<string | undefined>(undefined)
  const [passwordError, passwordErrorHandler] = React.useState(false)

  const [confirmPassword, confirmPasswordHandler] = React.useState('')
  const [confirmTouched, confirmTouchedHandler] = React.useState(false)
  const [passwordsMatch, passwordsMatchHandler] = React.useState(false)
 
  const [loading, loadingHandler] = React.useState(false)

  const toggleLoading = () => loadingHandler(!loading)

  const goToNextStep = async () => {
    try {
      toggleLoading()
      
      context.updateUserData({
        firstName: firstName!,
        lastName: lastName!,
        email: email!
      })

      context.updatePassword(password!)

      props.updateStep(props.currentStep + 1)

      toggleLoading()
    } catch (err) {
      toggleLoading()
    }
  }

  const goToPreviousStep = () => context.updatePage(C_Login.Page.Login)

  const handlePasswordMatch = (match: boolean) => passwordsMatchHandler(match)

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!confirmTouched) confirmTouchedHandler(true)
    if (e.currentTarget.value === password) handlePasswordMatch(true)
    else handlePasswordMatch(false)
    confirmPasswordHandler(e.currentTarget.value)
  }

  const isNextStepDisabled = () => {

    const valid = 
          firstNameError
      &&  lastNameError
      &&  emailError
      &&  passwordError
      &&  passwordsMatch
      
    return !valid
  }

  React.useEffect(() => {
    if (!confirmTouched) return
    if (password !== confirmPassword) return passwordsMatchHandler(false)
    if (password === confirmPassword) passwordsMatchHandler(true)
  }, [confirmPassword, password, confirmTouched])
  
  return (
    <Styles.UserData>
      <Heading.Component variant='h4'>
        info
      </Heading.Component>

      <form>
        <Name.Component label='first name' name='firstName' value={firstName} onChange={firstNameHandler} hasError={firstNameErrorHandler} />
        <Name.Component label='last name' name='LastName' value={lastName} onChange={lastNameHandler} hasError={lastNameErrorHandler} />
        <Email.Component value={email} onChange={emailHandler} hasError={emailErrorHandler} />
        <Password.Component value={password} onChange={passwordHandler} hasError={passwordErrorHandler} />
        <PasswordInput.Component label='confirm password' name='confirm_password' value={confirmPassword} onChange={handleConfirmPassword} error={!passwordsMatch && confirmTouched} errMsg='password must match' />
      </form>
      <div>
        <Button.Component 
          onClick={goToPreviousStep}
        >
          back
        </Button.Component>
        <Button.Component 
          onClick={goToNextStep} 
          disabled={isNextStepDisabled()}
        >
          {loading ? 'loading' : 'next'}
        </Button.Component>
      </div>
    </Styles.UserData>
  )
}

export const Component = UserData