
import * as Server_User from 'server/User'

export interface Context {
  info?: Server_User.Models.Info
  updateInfo: (info: Server_User.Models.Info) => void

  updatePassword: (value: string) => void

  currentStep: number
  onNextStep: () => void
  onPreviousStep: () => void
  
  create: (args: {
    firstName: string
    lastName: string
    email: string
    password: string
  }) => void
}