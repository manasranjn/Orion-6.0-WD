const express = require('express')
const allRoutes = express.Router()

const homeRoutes = require('./homeRoutes')
const loginRoutes = require('./loginRoutes')
const productRoutes = require('./productsRoutes')
const userRoutes = require('./usersRouter')

allRoutes.use('/home', homeRoutes)
allRoutes.use('/login', loginRoutes)
allRoutes.use('/product', productRoutes)
allRoutes.use('/user', userRoutes)

module.exports = allRoutes