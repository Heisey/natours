
import mongoose from 'mongoose'

import * as App from '../App'
import * as Core from '../core'

export const DB = mongoose
  .connect(Core.config.DB)
  .then(() => console.log('Database is connected'))
  .catch((err) => {
    new Core.custom.GlobalError(err).logError()
    Api.close(() => {
      process.exit(1)
    })
  })

export const Api = App.Main.listen(Core.config.PORT, () => {
  console.log(`app is listening on port ${Core.config.PORT}`)
})