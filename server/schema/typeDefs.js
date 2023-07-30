const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    # There is now a field to store the user's password
    password: String
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }
  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    editUser(userId: ID!, username: String!, email: String!, password: String!): User
  }

`;

module.exports = typeDefs;


