import React from 'react'
import styles from './styles'

const RadioGroup = props => {

  const {
    checked,
    handleChange,
    inputId,
    inputName,
    inputValue,
    text
  } = props

  return (
    <styles.RadioGroup>
      <styles.Input 
        type="radio" 
        id={inputId} 
        name={inputName} 
        value={inputValue}
        onChange={handleChange}
      />
      <styles.Label htmlFor="small">
        {text}
        <styles.Button 
          checked={checked}
        />
      </styles.Label>
    </styles.RadioGroup>
  )
}

export default RadioGroup