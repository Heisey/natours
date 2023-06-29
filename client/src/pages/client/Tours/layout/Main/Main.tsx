
import * as React from 'react'

import * as Tours_Ctx from '../../context'
import * as TourCard from '../../components/TourCard'

import * as Styles from './styles'

const Main: React.FC = () => {
  const toursCtx = Tours_Ctx.useContext()


  return (
    <Styles.Main>
      {toursCtx.tours!.map(dataSet => <TourCard.Component key={Math.random()} data={dataSet} />)}
    </Styles.Main>
  )
}

export const Component = Main