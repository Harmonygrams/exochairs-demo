const router = require('express').Router() 

//Routes to the users
router.use('/users', require('./users'))

//Routes to the products 
router.use('/product', require('./products'))
module.exports = router