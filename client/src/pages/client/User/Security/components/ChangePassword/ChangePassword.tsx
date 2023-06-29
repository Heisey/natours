
import * as React from 'react'

import * as Icons from 'assets/icons'
import * as Button from 'components/common/Buttons/Button'
import * as PasswordInput from 'components/common/Inputs/Password'
import * as Text from 'components/common/Typography/Text'
import * as Utils_Validation from 'utils/Validation'

import * as Ctx from '../../context'

import * as Styles from './styles'

const ChangePassword: React.FC = () => {

  const [password, passwordHandler] = React.useState<string | undefined>(undefined)
  
  const [confirmPassword, confirmPasswordHandler] = React.useState<string | undefined>(undefined)
  const [confirmPasswordTouched, confirmPasswordTouchedHandler] = React.useState(false)
  const [confirmPasswordValid, confirmPasswordValidHandler] = React.useState(false)
  const [confirmPasswordError, confirmPasswordErrorHandler] = React.useState('')

  const [newPasswordTouched, newPasswordTouchedHandler] = React.useState(false)
  const [newPassword, newPasswordHandler] = React.useState<string | undefined>(undefined)
  const [newPasswordValid, newPasswordValidHandler] = React.useState(false)
  const [newPasswordError, newPasswordErrorHandler] = React.useState('')

  const [passwordMatch, passwordMatchHandler] = React.useState(true)
  const [loading, loadingHandler] = React.useState(false)
  const [submitError, submitErrorHandler] = React.useState(true)

  const ctx = Ctx.useContext()
 
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => passwordHandler(e.currentTarget.value)

  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!newPasswordTouched) newPasswordTouchedHandler(true)
    newPasswordHandler(e.currentTarget.value)

    // check password length
    if (e.currentTarget.value.length < 8) {
      newPasswordValidHandler(false)
      newPasswordErrorHandler('password must be 8 or more characters')
    } else {
      newPasswordValidHandler(true)
      newPasswordErrorHandler('')
    }

    // check password value against alpha
    if (!Utils_Validation.isAlpha(e.currentTarget.value)) {
      newPasswordValidHandler(false)
      newPasswordErrorHandler('password must have one letter')
    } else {
      newPasswordValidHandler(true)
      newPasswordErrorHandler('')
    }

    // check if password match
    if (confirmPasswordTouched) {
      passwordMatchHandler(confirmPassword === e.currentTarget.value)

      if (confirmPassword !== e.currentTarget.value) {
        newPasswordValidHandler(false)
        newPasswordErrorHandler('new password must match confirm password')
      } else {
        newPasswordValidHandler(true)
        newPasswordErrorHandler('')
      }
    }
  }

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!confirmPasswordTouched) confirmPasswordTouchedHandler(true)
    confirmPasswordHandler(e.currentTarget.value)
    
    
    // check password length
    if (e.currentTarget.value.length < 8) {
      confirmPasswordValidHandler(false)
      confirmPasswordErrorHandler('password must be 8 or more characters')
    } else {
      confirmPasswordValidHandler(true)
      confirmPasswordErrorHandler('')
    }

    // check password value against alpha
    if (!Utils_Validation.isAlpha(e.currentTarget.value)) {
      confirmPasswordValidHandler(false)
      confirmPasswordErrorHandler('password must have one letter')
    } else {
      confirmPasswordValidHandler(true)
      confirmPasswordErrorHandler('')
    }

    // check if password match
    if (confirmPasswordTouched) {
      passwordMatchHandler(confirmPassword === e.currentTarget.value)

      if (confirmPassword !== e.currentTarget.value) {
        confirmPasswordValidHandler(false)
        confirmPasswordErrorHandler('new password must match confirm password')
      } else {
        confirmPasswordValidHandler(true)
        confirmPasswordErrorHandler('')
      }
    }
  }

  const isDisabled = () => {
    if (!password) return true

    if (!newPassword) return true
    if (!newPasswordValid) return true

    if (!confirmPassword) return true
    if (!confirmPasswordValid) return true

    if (!passwordMatch) return true

    return false
  }

  const toggleLoading = () => loadingHandler(!loading)
  const toggleSubmitError = () => submitErrorHandler(!submitError)

  const submit = async () => {
    toggleLoading()
    submitErrorHandler(await ctx.updatePassword({ password: password!, updatedPassword: newPassword! }))
    toggleLoading()
  }

  return (
    <Styles.ChangePassword
      showAlert={submitError}
    >
      <div>
        <Text.Component>something went wrong</Text.Component>
        <Icons.Solid.Close size='25' onClick={toggleSubmitError} />
      </div>
      <div>
        <Styles.Inputs>
          <PasswordInput.Component label='password' name='password' value={password} onChange={handlePassword} />
          <PasswordInput.Component label='new password' name='new' value={newPassword} onChange={handleNewPassword} error={newPasswordValid} errMsg={newPasswordError} />
          <PasswordInput.Component label='confirm password' name='confirm' value={confirmPassword} onChange={handleConfirmPassword} error={confirmPasswordValid} errMsg={confirmPasswordError} />
        </Styles.Inputs>
        <div>
          <Button.Component onClick={submit} disabled={isDisabled()}>update</Button.Component>
          <Button.Component onClick={ctx.toggleShowChangePassword}>cancel</Button.Component>
        </div>
      </div>
    </Styles.ChangePassword>
  )
}

export const Component = ChangePassword