
import * as React from 'react'

import * as Text from 'components/common/Typography/Text'

import * as _M from './Props'
import * as Styles from './styles'

const Password: React.FC<_M.Props> = (props) => {

  return (
    <Styles.Password
      error={props.error}
    >
      <input
        {...props}
        id={props.name}
        type='password'
        placeholder={props.label}
      />
      <label
        htmlFor={props.name}
      >
        {props.label}
      </label>
      {props.error && <Text.Component>{props.errMsg}</Text.Component>}
    </Styles.Password>
  )
}

export const Component = Password