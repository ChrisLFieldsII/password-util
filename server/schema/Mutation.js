const logger = require('../logger')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('../utils')

module.exports = {
    createUser: (root, args, ctx, info) => {
        let { name, email, password } = args
        const salt = bcrypt.genSaltSync()
        password = bcrypt.hashSync(password, salt)
        let newUser = new ctx.User({ name, email, password })
        logger.debug('new user:',newUser)
        newUser.save((err) => {
            if (err) logger.error(err)
            else logger.info(`New user ${name} saved!`)
        })
        return newUser
    },
    login: async (root, args, ctx, info) => {
        const { email, password } = args
        let loginPayload = {}
        await ctx.User.findOne({email}, (err, user) => {
            if (err) logger.error(err)

            if (bcrypt.compareSync(password, user.password)) {
                const jwtOptions = {expiresIn:'2h', issuer:'Chris Fields', subject:'Logging in', audience:'Users'}
                const token = jwt.sign(user.toObject(), APP_SECRET, jwtOptions)
                loginPayload = {token, user}
            }
            else {
                logger.error(`User ${email} failed to login`)
                loginPayload = {token:'N/A'}
            }
        })
        return loginPayload
    },
    deleteAllUsers: async (root, args, ctx, info) => {
        let numDocsRemoved = 0
        await ctx.User.remove({}, (err, docs) => {
            if (err) logger.error(err)
            logger.info('# docs removed:',docs.result.n)
            numDocsRemoved = docs.result.n
        })
        return numDocsRemoved
    },
}
