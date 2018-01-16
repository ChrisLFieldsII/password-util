const express = require('express')
const logger = require('./logger')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const schema = require('./schema/schema')
const User = require('./models/User') // interacting with DB through models
const { execute, subscribe } = require('graphql')
const { createServer } = require('http')
const { SubscriptionServer } = require('subscriptions-transport-ws')


// conn to db
require('./mongo-connector')

const app = express()
const port = 5000

// mws
app.use(bodyParser.json())

// graphql mws
app.use('/graphql', graphqlExpress({ schema:schema, context:{User,}}))
app.get('/graphiql', graphiqlExpress({ endpointURL:'/graphql', subscriptionsEndpoint:`ws://localhost:${port}/subscriptions` }))

const server = createServer(app) // wrap server to set up WebSocket to listen to GraphQL subs
server.listen(port, () => {
    logger.info(`Magic happening on port ${port}`)
    new SubscriptionServer({ execute, subscribe, schema }, { server:server, path:'/subscriptions' })
})

