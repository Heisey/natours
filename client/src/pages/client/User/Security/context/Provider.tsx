
import * as MxReact from 'mobx-react'
import * as React from 'react'

import * as Hooks from 'hooks'
import * as Store from 'store'

import * as Ctx from './'

interface Props {
  children?: React.ReactNode
}

const Provider: React.FC<Props> = (props) => {

  const RootStore = Hooks.Common.useStore()

  const [showChangePassword, showChangePasswordHandler] = React.useState(false)

  const toggleShowChangePassword = () => showChangePasswordHandler(!showChangePassword)

  const updatePassword = (args: Store.Auth.Models.UpdatePasswordArgs) => RootStore.auth.updatePassword(args)
  
  return (
    <Ctx.Context.Provider
      value={{
        showChangePassword,
        toggleShowChangePassword,
        updatePassword
      }}
    >
      {props.children}
    </Ctx.Context.Provider>
  )
}

export const Component = MxReact.observer(Provider)