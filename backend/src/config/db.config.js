const mongoose = require('mongoose') 
const DB_NAME = "exochairs" 
const MONGO_URI = `mongodb://localhost:27017/${DB_NAME}`

mongoose.connect(MONGO_URI, {
    useUnifiedTopology : true, 
    useNewUrlParser : true
})
console.log("Database connected successful")