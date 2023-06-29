
import * as React from 'react'

import * as Styles from './styles'

interface Props extends React.PropsWithChildren {

}

const Row: React.FC<Props> = (props) => {

  return (
    <Styles.Row>
      {props.children}
    </Styles.Row>
  )
}

export const Component = Row