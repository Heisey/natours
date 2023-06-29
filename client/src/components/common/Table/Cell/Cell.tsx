
import * as React from 'react'

import * as Styles from './styles'
interface Props extends React.PropsWithChildren {

}

const Cell: React.FC<Props> = (props) => {

  return (
    <Styles.Cell>
      {props.children}
    </Styles.Cell>
  )
}

export const Component = Cell