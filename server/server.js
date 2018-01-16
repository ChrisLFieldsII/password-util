const express = require('express')
const logger = require('./logger')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const schema = require('./schema/schema')
const User = require('./models/User') // interacting with DB through models

// conn to db
require('./mongo-connector')

const app = express()

// mws
app.use(bodyParser.json())

// graphql mws
app.use('/graphql', graphqlExpress({ schema:schema, context:{User,}}))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

const port = 5000
app.listen(port, () => logger.info(`Magic happening on port ${port}`))
