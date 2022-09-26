const router = require('express').Router() 

//Routes to the users
router.use('/users', require('./users'))

module.exports = router