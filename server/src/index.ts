

// import * as dotenv from 'dotenv'

import * as Server from './server'
// import * as Utils from './utils'

// dotenv.config({
//   path: './dev.env'
// })

console.log('puppy port', process.env.DB)

// to import all user data uncomment function below
// Utils.DB.importUserSeedData()

// to import all data uncomment Util function below
// Utils.DB.importTourSeedData()

// to clear tours out of database function below
// Utils.DB.clearTourData()

Server.DB

Server.Api