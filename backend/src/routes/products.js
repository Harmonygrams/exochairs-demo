const router = require('express').Router() 
const Product = require('../models/products.model')
router.post('/add', (req, res, next) => {
    res.send('This route is used to add product')
})
router.delete('/delete', (req, res, next) => {

})
router.put('/update', (req, res, next) => {

})
module.exports = router; 