
import * as React from 'react'

import * as Styles from './styles'

interface Props extends React.PropsWithChildren {
  className?: string
}

const Card: React.FC<Props> = (props) => {

  return (
    <Styles.Card
      className={props.className}
    >
      
      {props.children}
    </Styles.Card>
  )
}

export const Component = Card