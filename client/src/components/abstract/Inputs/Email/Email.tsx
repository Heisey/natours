
import * as React from 'react'

import * as TextInput from 'components/common/Inputs/Text'
import * as Server_User from 'server/User'
import * as Utils_String from 'utils/String'
import * as Utils_Validation from 'utils/Validation'

import * as _M from './Props'

const Email: React.FC<_M.Props> = (props) => {

  const [touched, touchedHandler] = React.useState(false)
  const [error, errorHandler] = React.useState(false)
  const [errMsg, errMsgHandler] = React.useState<string | undefined>(undefined)

  
  const isString = (value?: string) => {
    if (Utils_String.isString(value)) {
      errorHandler(false)
      errMsgHandler(undefined)
      props.hasError(false)
    }
    else {
      errorHandler(true)
      errMsgHandler('Must Enter a valid email')
      return props.hasError(true)
    }
  }

  const isEmail = (value: string) => {
    if (!Utils_Validation.isEmail(value)) {
      errorHandler(true)
      errMsgHandler('must enter a valid format abc@abc.ab')
      return props.hasError(true)
    }
    else {
      errorHandler(false)
      errMsgHandler(undefined)
      props.hasError(false)
    }
  }

  const isAvailable = async (value: string) => {

    if (!value) {
      errorHandler(true)
      errMsgHandler('email is not available')
      return props.hasError(true)
    }
    
    const exists = await Server_User.api.Self.doesUserExist(value)

    if (exists) {
      errorHandler(true)
      errMsgHandler('email is not available')
      return props.hasError(true)
    } 
    else {
      errorHandler(false)
      errMsgHandler(undefined)
      props.hasError(false)
    }
  }

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!touched) touchedHandler(true)
    const value = e.currentTarget.value
    props.onChange(value)
    isString(value)
    isEmail(value)
    isAvailable(value)
  }

  return (
    <TextInput.Component
      className={props.className}
      name='email'
      label='email'
      type='email'
      onChange={onChange}
      error={touched && error}
      errMsg={errMsg}
    />
  )
}

export const Component = Email