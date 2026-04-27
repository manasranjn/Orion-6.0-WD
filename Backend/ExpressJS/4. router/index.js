const express = require('express')
const app = express()

const allRoutes = require('./routes/allRoutes')

app.use('/api', allRoutes)

// http://localhost:3000/api/home



app.listen(3000, () => {
    console.log("Server is running");
})