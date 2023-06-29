
import * as Server_User from 'server/User'
import * as Store_Auth from 'store/Auth'

import * as M_Login from './'

import { Page } from './Page'


export interface Context {
  page: Page
  updatePage: (page: Page) => void

  loginEmail?: string
  updateLoginEmail: (email?: string) => void
  updatePassword: (password: string) => void

  userData: Server_User.Models.Info
  updateUserData: (data: Server_User.Models.Info) => void

  userPreferences: M_Login.Preferences
  updateUserPreferences: (data: M_Login.Preferences) => void

  createUser: () => void
  loginUser: (args: Store_Auth.Models.LoginArgs) => void
  doesUserExist: (email: string) => Promise<boolean>
}