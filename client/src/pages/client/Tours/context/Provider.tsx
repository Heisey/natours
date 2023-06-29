
import * as React from 'react'

import * as Hooks from 'hooks'
// import * as Server_Tour from 'server/Tours'

import * as ToursCtx from './'

interface Props {
  children?: React.ReactNode
}

const Provider: React.FC<Props> = (props) => {
  // const RootState = Hooks.Common.useStore()
  const toursCtx = Hooks.Server.useTours()

  // const [numberOfTours, numberOfToursHandler] = React.useState<number | undefined>(undefined)

  // React.useEffect(() => {
  //   const init = async () => {
  //     const response = await RootState.tour.getTours()

  //     if (!response.data) return
  //     console.log(response.data)
  //     numberOfToursHandler(response.data.records)
  //   }

  //   init()
  // }, [RootState.tour])

  return (
    <ToursCtx.Context.Provider
      value={{
        tours: toursCtx.records,
        numberOfTours: toursCtx.records?.length
      }}
    >
      {props.children}
    </ToursCtx.Context.Provider>
  )
}

export const Component = Provider