const {Schema, model} = require('mongoose')
const userSchema = Schema({
    name : {type : String, required : true, trim : true}, 
    email : {type : String, requred : true, trim : true, unique : true}, 
    hash : {type : String, required : true}, 
    salt : {type : String, required : true}
})
const User = model('User', userSchema)
module.exports = User