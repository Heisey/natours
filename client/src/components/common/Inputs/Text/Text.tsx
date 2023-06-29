
import * as React from 'react'

import * as Text from 'components/common/Typography/Text'

import * as _M from './Props'
import * as Styles from './styles'

const TextInput: React.FC<_M.Props> = (props) => {

  return (
    <Styles.Text
      error={props.error}
    >
      <input 
        {...props}
        id={props.name}
        type={props.type}
        placeholder={props.label}
      />
      <label
        htmlFor={props.name}
      >
        {props.label}
      </label>
      {props.error && <Text.Component>{props.errMsg}</Text.Component>}
    </Styles.Text>
  )
}

TextInput.defaultProps = {
  type: 'text',
  errMsg: ''
}

export const Component = TextInput