
import * as MxReact from 'mobx-react'
import * as React from 'react'

import * as App from 'App'
import * as Hooks from 'hooks'
import * as Server_User from 'server/User'

import * as AdminGuidesCreateCtx from './'

interface Props extends React.PropsWithChildren {}

const Provider: React.FC<Props> = (props) => {

  const globalCtx = Hooks.Common.useStore()
  const appCtx = App.Ctx.useContext()

  const [currentStep, currentStepHandler] = React.useState(1)
  const [info, infoHandler] = React.useState<Server_User.Models.Info | undefined>(undefined)
  // const [password, passwordHandler] = React.useState<string | undefined>(undefined)

  const createUser = async (args: {
    email: string
    password: string
    firstName: string
    lastName: string
  }) => {
    try {
      appCtx.setLoadingOverlay(true)
      // if (!info || !password) return appCtx.setLoadingOverlay(false)

      await globalCtx.guides.create({
        ...args,
        token: globalCtx.auth.token!
      })
      appCtx.setLoadingOverlay(false)
    } catch (err) {
      appCtx.setLoadingOverlay(false)
    }
    
  }

  const onNextStep = () => {
    if (currentStep === 1) return currentStepHandler(2)
  }

  const onPreviousStep = () => {
    if (currentStep === 2) return currentStepHandler(1)  
  }

  return (
    <AdminGuidesCreateCtx.Context.Provider
      value={{
        info,
        updateInfo: infoHandler,
        // updatePassword: passwordHandler,
        updatePassword: () => {},

        currentStep,
        onNextStep,
        onPreviousStep,

        create: createUser
      }}
    >
      {props.children}
    </AdminGuidesCreateCtx.Context.Provider>
  )
}

export const Component = MxReact.observer(Provider)