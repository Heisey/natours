
import * as React from 'react'

import * as Server_User from 'server/User'

import * as Guides_Keys from '../keys'
import * as Guides_Models from '../Models'
import * as GuidesCtx from './'

interface Props {
  children?: React.ReactNode
}

const Provider: React.FC<Props> = (props) => {

  // const [guides, guidesHandler] = React.useState<Server_User.Models.User[]>([])
  const [slide, slideHandler] = React.useState<Guides_Models.Slides>(Guides_Keys.Slides.OVERVIEW)


  const init = async () => {

    const response = await Server_User.api.Guides.getAll()

    if (response.status !== 200) return

    // guidesHandler(response.data.users)
  }

  

  React.useEffect(() => {
    init()
  }, [])


  return (
    <GuidesCtx.Context.Provider
      value={{
        guides: [],

        slide,
        updateSlide: slideHandler
      }}
    >
      {props.children}
    </GuidesCtx.Context.Provider>
  )
}

export const Component = Provider