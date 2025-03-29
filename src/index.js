 const {ServerConfig,LoggerConfig} = require('./config/index.js')
const express = require('express')
const apiRoutes= require('./routes/index.js')


 const app = express();
 app.use('/api', apiRoutes)
 app.listen(ServerConfig.PORT, () => {
  console.log(`server running on port ${ServerConfig.PORT}`),
  LoggerConfig.info('succesfully started the server',"root",{})
 }
)