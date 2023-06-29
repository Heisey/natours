
import * as M from './Models'

declare global {
  namespace Express {
    interface Request {
      user?: M.User
    }
  }
}