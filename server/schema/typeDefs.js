const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    orders: [Order]
  }

  type Category {
    _id: ID
    name: String
  }

  type SubCategory {
    _id: ID
    name: String
    category: Category
  }

  type Product {
    _id: ID
    name: String!
    description: String
    image: String
    price: Int
    stock: Int
    sizes: [String]
    style: String
    subcategory: SubCategory
  }

  type Order {
    _id: ID
    user: User!
    items: [Product]
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    categories: [Category]
    category(categoryId: ID!): Category
    subcategories(category: ID, name: String): [SubCategory]
    subcategory(subcategoryId: ID!): [SubCategory]
    products(subcategory: ID, name: String): [Product]
    product(productId: ID!): [Product]
  }
  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    updateUser(userId: ID!, username: String, email: String, password: String): User
    editUser(userId: ID!, username: String, email: String, password: String): Auth
    addCategory(name: String!): Category
    removeCategory(categoryId: ID!): Category
    addSubCategory(name: String, category: ID!): SubCategory
    removeSubCategory(subcategoryId: ID!): SubCategory
  }
`;

module.exports = typeDefs;

// subcategories: [SubCategory]
// subcategory(subcategoryId: ID!): [SubCategory]
// products: [Product]
// product(product: ID!): [Product]

// addProduct(name: String!, subcategory: SubCategory!): Product

// editCategory
// editSubCategory
// editProduct


// removeProduct

