
import * as React from 'react'

import * as Review from '../../components/Review'

import * as Styles from './styles'

const Reviews: React.FC = () => {

  return (
    <Styles.Reviews>
      <div>
        <Review.Component />
        <Review.Component />
        <Review.Component />
        <Review.Component />
      </div>
    </Styles.Reviews>
  )
}

export const Component = Reviews