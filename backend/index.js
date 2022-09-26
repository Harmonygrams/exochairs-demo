const express = require('express') 
const app = express() 

// App configurations 
require('./src/config/db.config.js')

//making the environmental variables global
require('dotenv').config()
const port = process.env.PORT 

//middleware 
require('./src/middleware/index')(app)


app.listen(port, () => {console.log('Server is up and running at port ', port)})