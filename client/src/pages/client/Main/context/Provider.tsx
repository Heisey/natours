
import * as React from 'react'

import * as Ctx from './'

interface Props {
  children?: React.ReactNode
}

const Provider: React.FC<Props> = (props) => {

  return (
    <Ctx.Context.Provider
      value={{}}
    >
      {props.children}
    </Ctx.Context.Provider>
  )
}

export const Component = Provider