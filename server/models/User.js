const mongoose = require('mongoose')
const dbConfig = require('../config/db.json')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model('User', UserSchema, dbConfig.colls.users)
module.exports = User
