
import * as MxReact from 'mobx-react'
import * as React from 'react'

import * as Hooks from 'hooks'

import * as CtxLogin from './'

interface Props extends React.PropsWithChildren {}

const Provider: React.FC<Props> = (props) => {

  const GlobalStore = Hooks.Common.useStore()

  return (
    <CtxLogin.Context.Provider
      value={{
        logout: GlobalStore.auth.logout
      }}
    >
      {props.children}
    </CtxLogin.Context.Provider>
  )
}

export const Component = MxReact.observer(Provider)