const mongoose = require('mongoose') 
const DB_NAME = "exochairs" 
const MONGO_URI = `mongodb+srv://admin:admin@cluster0.rnti4kn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI, {
    useUnifiedTopology : true, 
    useNewUrlParser : true
})
console.log("Database connected successful")