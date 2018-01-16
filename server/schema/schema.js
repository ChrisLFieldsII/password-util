const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
        password: String! # stores hashed pw
    }

    type Query {
        allUsers: [User!]!
    }

    type Mutation {
        createUser(name:String!, email:String!, password:String!):User
        login(email:String!, password:String!):LoginPayload!
        deleteAllUsers:Int!
    }

    type LoginPayload {
        token:String
        user:User
    }
` // END typeDefs

//export schema
module.exports = makeExecutableSchema({typeDefs, resolvers})
