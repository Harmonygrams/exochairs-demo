const crypto = require('crypto')
const jsonwebtoken = require('jsonwebtoken') 
const path = require('path') 
const fs = require('fs') 
const pathToKeys = path.join(__dirname, '..', '/keys')
const PRIV_KEY = fs.readFileSync((pathToKeys + '/id_rsa_priv.pem'), 'utf-8')
const PUB_KEY = fs.readFileSync((pathToKeys + '/id_rsa_pub.pem'), 'utf-8')



/**                                      HELPER PARAMS 

* @param {*} password - The plain text password 
* @param {*} hash - A plain hashed text used to validate the passoword 
* @param {*} salt - A plain hashed text used to validate the password 
*/ 



//This function encrypts the user's password generates hash and salt
const encryptPassword = (password) => {
    const salt = crypto.randomBytes(32).toString('hex')
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex') 
    return {hash, salt}
}



//Used to verify the password supplied by the user is accurate and corresponds with hash in database
const validatePassword = (password, oldHash, salt) => {
    const newHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex') 
    return newHash === oldHash 
}

/**
 * 
 * @param {*} user - The user object that is returned by the db after everything's been verified
 */


//Generates a json web token for the first time users and expired tokens
const genToken = (user) => {
    const expiresIn = '1d'
    const token = jsonwebtoken.sign({
       sub : user._id, 
       iat : Date.now(),
       expires : expiresIn,
    }, PRIV_KEY, {algorithm : 'RS256'})
    return {
        token : "Bearer" + token, 
        expiresIn : expiresIn
    }
}
module.exports = {encryptPassword, validatePassword, genToken}