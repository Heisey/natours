
import * as React from 'react'

// import * as App from 'App'
import * as Icons from 'assets/icons'
import * as Email from 'components/abstract/Inputs/Email'
import * as Name from 'components/abstract/Inputs/Name'
import * as Button from 'components/common/Buttons/Button'
import * as Password from 'components/common/Inputs/Password'
import * as Title from 'components/common/Typography/Heading'

import * as Admin_Guides_Create_Ctx from '../../context'

const Details: React.FC = () => {

  // const appCtx = App.Ctx.useContext()
  const adminGuidesCreateCtx = Admin_Guides_Create_Ctx.useContext()

  const [firstName, firstNameHandler] = React.useState<string | undefined>(undefined)
  // const [firstNameError, firstNameErrorHandler] = React.useState(false)

  const [lastName, lastNameHandler] = React.useState<string | undefined>(undefined)
  // const [lastNameError, lastNameErrorHandler] = React.useState(false)

  const [email, emailHandler] = React.useState<string | undefined>(undefined)
  // const [emailError, emailErrorHandler] = React.useState(false)
  const [password, passwordHandler] = React.useState<string | undefined>(undefined)
  const [confirmPassword, confirmPasswordHandler] = React.useState<string | undefined>(undefined)

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => passwordHandler(e.currentTarget.value)
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => confirmPasswordHandler(e.currentTarget.value)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      adminGuidesCreateCtx.updateInfo({ firstName: firstName!, lastName: lastName!, email: email! })
      adminGuidesCreateCtx.updatePassword(password!)
      await adminGuidesCreateCtx.create({
        firstName: firstName!,
        lastName: lastName!,
        email: email!,
        password: password!
      })
      adminGuidesCreateCtx.onNextStep()
    } catch (err) {
      window.alert('something went wrong')
    }
  }

  // const isNextDisable = () => {
  //   const valid = 
  //         firstNameError
  //     &&  lastNameError
  //     &&  emailError
  //   return !valid
  // }

  return (
    <div>
      <div>
        <Icons.Solid.UserDetails size='40' />
        <Title.Component>
          Details
        </Title.Component>
      </div>
      <form onSubmit={onSubmit}>
        <Title.Component>Info</Title.Component>
        <Name.Component label='first name' name='firstName' value={firstName} onChange={firstNameHandler} 
          // hasError={firstNameErrorHandler} 
          hasError={() => {}}
        />
        <Name.Component label='last name' name='lastName' value={lastName} onChange={lastNameHandler} 
          // hasError={lastNameErrorHandler} 
          hasError={() => {}}
        />
        <Email.Component 
          value={email} 
          onChange={emailHandler} 
          // hasError={emailErrorHandler} 
          hasError={() => {}}
        />
        <Password.Component label='password' name='password' value={password} onChange={handlePassword} />
        <Password.Component label='confirm password' name='confirmPassword' value={confirmPassword} onChange={handleConfirmPassword} />
        <Button.Component 
          // disabled={isNextDisable()}
          
        >
          next
        </Button.Component>
      </form>

    </div>
  )
}

export const Component = Details