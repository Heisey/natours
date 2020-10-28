import React from 'react'
import styles from './styles'

const Input = props => {

  const {
    inputId,
    inputName,
    handleChange,
    inputPlaceholder,
    inputRequired,
    inputType,
    inputValue,
  } = props

  return (
    <styles.Input 
      id={inputId}
      type={inputType} 
      placeholder={inputPlaceholder ? inputPlaceholder : null} 
      required={inputRequired ? true : false}
      name={inputName}
      value={inputValue}
      onChange={handleChange}
    />
  )
}

export default Input