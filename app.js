const express = require('express')
const cors = require('cors')
const app = express()
const ewayRouter = require('./routers/ewayRouter')
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }))

app.use(express.json())

app.use('/api/v1/eway', ewayRouter)

app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        err: err.message
    })
})

module.exports = app
