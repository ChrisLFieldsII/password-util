const mongoose = require('mongoose')
const logger = require('./logger')

const dbConn = 'mongodb://localhost/password-util'

const connectToDb = mongoose.connect(dbConn, {useMongoClient:true}, (err) => {
    if (err) logger.error('Failed to connect to db!!!')
    else logger.info('Successfully connected to db!')
})

module.exports = connectToDb
