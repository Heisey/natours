
import * as React from 'react'

import * as TextInput from 'components/common/Inputs/Text'
import * as Utils_String from 'utils/String'

import * as _M from './Props'

const Name: React.FC<_M.Props> = (props) => {

  const [error, errorHandler] = React.useState(false)
  const [touched, touchedHandler] = React.useState(false)
  const [errMsg, errMsgHandler] = React.useState<string | undefined>(undefined)

  const validString = (value: string) => {
    console.log('pupies lenght 1')
    if (Utils_String.isString(value)) {
      errorHandler(false)
      errMsgHandler(undefined)
      props.hasError(false)
    } else {
      errorHandler(true)
      errMsgHandler('must enter a valid name')
      return props.hasError(true)
    }
  }

  const hasLength = (value: string) => {

    if (value.length < 2) {
      console.log('pupies lenght')
      errorHandler(true)
      errMsgHandler('a name must have atleast 2 letters')
      props.hasError(true)
    } else {
      errorHandler(false)
      errMsgHandler(undefined)
      return props.hasError(false)
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!touched) touchedHandler(true)
    const value = e.currentTarget.value
    props.onChange(value)
    validString(value)
    hasLength(value)
  }

  return (
    <TextInput.Component 
      className={props.className}
      label={props.label}
      name={props.name}
      onChange={onChange}
      error={touched && error}
      errMsg={errMsg}
    />
  )
}

export const Component = Name