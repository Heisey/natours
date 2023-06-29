
import * as MxReact from 'mobx-react'
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import * as Hooks from 'hooks'

import * as ToursCtx from './'

interface Props extends React.PropsWithChildren {}

const Provider: React.FC<Props> = (props) => {

  const toursCtx = Hooks.Server.useTours()

  const params = ReactRouter.useParams()

  const tour = toursCtx.records?.filter(dataSet => dataSet.id === params.id)[0]

  return (
    <ToursCtx.Context.Provider
      value={{
        tour
      }}
    >
      {props.children}
    </ToursCtx.Context.Provider>
  )
}

export const Component = MxReact.observer(Provider)