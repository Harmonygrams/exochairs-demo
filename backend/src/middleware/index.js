const express = require('express')
const cors = require('cors')
const middleWares = (app) => {
    app.use(express.json())
    app.use(cors())
    app.use(require('../routes/index'))
}
module.exports = middleWares