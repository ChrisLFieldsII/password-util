const express = require('express')
const morgan = require('morgan')
const logger = require('./logger')
const bodyParser = require('body-parser')

// conn to db
require('./mongo-connector')

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))


const port = 5000
app.listen(port, () => logger.info(`Magic happening on port ${port}`))
