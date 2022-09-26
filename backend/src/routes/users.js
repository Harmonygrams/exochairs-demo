const {encryptPassword, validatePassword, genToken} = require('../utils/index')
const User = require('../models/users.model.js') 
const router = require('express').Router()
router 
    .get('/', (req, res, next) => {
        res.send('Welcome to users homepage')
    })

router
    .post('/login', (req, res, next) => {
        const {email , password} = req.body
        User.findOne({email : email}). 
            then(user => {
                if(!user) return res.status(200).json({success : false, msg : "Couldn't find your account ", type : 1})
                const isPasswordValid = validatePassword(password, user.hash, user.salt)
                if(!isPasswordValid) return res.status(200).json({success : false, msg : "Incorrect password ", type : 2})
                const newToken = genToken(user)
                res.status(200).json({success : true, name : user.name, token : newToken.token, expiresIn : newToken.expiresIn})
            })
    })

    //Saves the username, email,  hash, salt to the database 
    .post('/register', (req, res, next) => {
        const {hash, salt} = encryptPassword(req.body.password) 
        const {fullName, email} = req.body
        User.findOne({email : email}, {email : 1})
            .then(user => {
                if(user) return res.status(200).json({success : false, msg : 'Account already exists', type : 1})
                    const newUser = new User({
                        name :  fullName, 
                        email : email, 
                        hash : hash, 
                        salt : salt
                    })
                    newUser.save((err) => {
                        if(err) return res.status(201).json({success : false, msg : err})
                        return res.status(200).json({success : true, msg : "User successfully registered"})
                    })
            }).
            catch(err => res.send(err))
    })

    //Used to reset the user password 
    .post('/reset', (req, res, next) => {})

module.exports = router