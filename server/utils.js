const { PubSub } = require('graphql-subscriptions')

// enables subscriptions for GraphQL server
const pubsub = new PubSub()

const APP_SECRET = 'DBZ-is-le-b0mb'

const USER_CREATED = 'userCreated'

module.exports = {
    APP_SECRET,
    pubsub,
    USER_CREATED,
}
