const { pubsub, USER_CREATED } = require('../utils')

module.exports = {
    userCreated: {
        subscribe: (root, args, ctx, info) => pubsub.asyncIterator(USER_CREATED)
    },
}
