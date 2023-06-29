
import * as React from 'react'

import * as _M from './Props'
import * as Styles from './styles'

const Radio: React.FC<_M.Props> = (props) => {
  
  return (
    <Styles.Radio
      isChecked={props.checked!}
    >
      <input 
        {...props}
        id={props.name}
        type='radio' 
      />
      <label
        htmlFor={props.name}
      >
        <span></span>
        {props.label}
      </label>
    </Styles.Radio>
  )
}

Radio.defaultProps = {
  checked: false
}

export const Component = Radio