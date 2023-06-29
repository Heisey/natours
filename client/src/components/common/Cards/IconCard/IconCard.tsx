
import * as React from 'react'

import * as Styles from './styles'

export interface Props extends React.PropsWithChildren {
  icon: React.ReactNode
}

const IconCard: React.FC<Props> = (props) => {

  return (
    <Styles.IconCard>
      <div>
        {props.icon}
      </div>
      <div>
        {props.children}
      </div>
    </Styles.IconCard>
  )
}

export const Component = IconCard