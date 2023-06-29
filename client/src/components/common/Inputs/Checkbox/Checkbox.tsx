
import * as React from 'react'

import * as Text from 'components/common/Typography/Text'

import * as _M from './Props'
import * as Styles from './styles'

const Checkbox: React.FC<_M.Props> = (props) => {

  return (
    <Styles.Checkbox checked={props.checked!}>
      <input 
        {...props} 
        type="checkbox" 
        id={props.name} 
      />
      <label htmlFor={props.name}>
        <span>
        </span>
        <Text.Component>{props.label}</Text.Component>
      </label>
    </Styles.Checkbox>
  )
}

Checkbox.defaultProps = {
  checked: false
}

export const Component = Checkbox