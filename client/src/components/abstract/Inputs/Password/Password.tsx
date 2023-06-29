
import * as React from 'react'

import * as PasswordInput from 'components/common/Inputs/Password'
import * as Utils_Validation from 'utils/Validation'

import * as _M from './Props'

const Password: React.FC<_M.Props> = (props) => {

  const [error, errorHandler] = React.useState(false)
  const [errMsg, errMsgHandler] = React.useState<string | undefined>(undefined)
  const [touched, touchedHandler] = React.useState(false)

  const hasLength = (value?: string) => {
    if (!value) {
      errorHandler(true)
      errMsgHandler('password must have a min length of 8 characters')
      return props.hasError(true)
    } else {
      errorHandler(false)
      errMsgHandler(undefined)
      props.hasError(false)
    }

    if (value.length < 8) {
      errorHandler(true)
      errMsgHandler('password must have a min length of 8 characters')
      return props.hasError(true)
    } else {
      errorHandler(false)
      errMsgHandler(undefined)
      props.hasError(false)
    }
  }

  const isAlpha = (value: string) => {
    if (!Utils_Validation.isAlpha(value)) {
      errorHandler(true)
      errMsgHandler('password must have one character')
      return props.hasError(true)
    }
    else {
      errorHandler(false)
      errMsgHandler(undefined)
      props.hasError(false)
    }
  }

  const isNumeric = (value: string) => {
    if (!Utils_Validation.isAlpha(value)) {
      errorHandler(true)
      errMsgHandler('password must have one character')
      return props.hasError(true)
    }
    else {
      errorHandler(false)
      errMsgHandler(undefined)
      props.hasError(false)
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!touched) touchedHandler(true)
    const value = e.currentTarget.value
    props.onChange(value)
    hasLength(value)
    isAlpha(value)
    isNumeric(value)
  }

  return (
    <PasswordInput.Component
      label='password'
      name='password'
      value={props.value}
      onChange={onChange}
      error={touched && error}
      errMsg={errMsg}
    />
  )
}

export const Component = Password