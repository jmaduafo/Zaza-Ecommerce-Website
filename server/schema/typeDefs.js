const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    order: [Product]
  }

  type Category {
    _id: ID
    name: String
    subcategories: [SubCategory]
  }

  type SubCategory {
    _id: ID
    name: String
    products: [Product]
  }

  type Product {
    _id: ID
    name: String!
    category: Category
    subcategory: SubCategory
    stock: Int
    price: Int
  }

  type Order {
    _id: ID
    user: User!
    items: [Products]
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


