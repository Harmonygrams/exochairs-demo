const crypto = require('crypto') 
const fs = require('fs') 

const generateKeyPairs = () => {
    const keypairs = crypto.generateKeyPairSync('rsa', {
        modulusLength : 4096, 
        publicKeyEncoding : {
            type : 'pkcs1', 
            format : 'pem'
        },
        privateKeyEncoding : {
            type : 'pkcs1', 
            format : 'pem'
        }
    })
    //Saving the private key to the database 
    fs.writeFileSync(__dirname + '/id_rsa_priv.pem', keypairs.privateKey)
    //Saving the public key to the database 
    fs.writeFileSync(__dirname + '/id_rsa_pub.pem', keypairs.publicKey)

}
generateKeyPairs() 
