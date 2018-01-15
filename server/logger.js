const log4js = require('log4js')
const logger = log4js.getLogger('SERVER_LOGGER')
logger.level = 'debug'
module.exports = logger
