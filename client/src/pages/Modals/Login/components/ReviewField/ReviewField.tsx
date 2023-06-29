
import * as React from 'react'

import * as Text from 'components/common/Typography/Text'

import * as Styles from './styles'

interface Props {
  label: string
  value: string
}

const ReviewField: React.FC<Props> = (props) => {

  return (
    <Styles.ReviewField>
      <Text.Component>{props.label}</Text.Component>
      <Text.Component>{props.value}</Text.Component>
    </Styles.ReviewField>
  )
}

export const Component = ReviewField