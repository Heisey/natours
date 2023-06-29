
import * as React from 'react'

import * as Styles from './styles'

interface Props {
  text: string
  className?: string
}

const AnimatedText: React.FC<Props> = (props) => {

  return (
    <Styles.AnimatedText
      className={props.className}
      variant='span'
    >
      {props.text}
    </Styles.AnimatedText>
  )
}

export const Component = AnimatedText