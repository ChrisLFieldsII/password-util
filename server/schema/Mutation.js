const logger = require('../logger')

module.exports = {
    createUser: (root, args, ctx, info) => {
        const { name, email, password } = args
        let newUser = new ctx.User({ name, email, password })
        newUser.save((err) => {
            if (err) logger.error(err)
            else logger.info(`New user "${name}" saved`)
        })
        return newUser
    },
}
