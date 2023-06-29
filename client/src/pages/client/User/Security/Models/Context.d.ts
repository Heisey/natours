
import * as Store from 'store'

export interface Context {
  showChangePassword: boolean
  toggleShowChangePassword: () => void
  updatePassword: (args: Store.Auth.Models.UpdatePasswordArgs) => Promise<boolean>
}