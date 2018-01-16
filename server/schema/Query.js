const logger = require('../logger')

module.exports = {
    allUsers: async (root, args, ctx, info) => {
        return await ctx.User.find({})
    },
}
