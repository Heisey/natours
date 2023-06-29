
import * as React from 'react'

import * as Styles from './styles'

interface Props extends React.PropsWithChildren {}

const AnimatedTextButton: React.FC<Props> = (props) => {

  return (
    <Styles.AnimatedTextButton
      variant='text'
    >
      {props.children}
      <Styles.Arrow
        size='25'
        fill='primary'
      />
    </Styles.AnimatedTextButton>
  )
}

export const Component = AnimatedTextButton