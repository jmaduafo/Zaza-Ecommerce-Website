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
    price: Float
    stock: Int
    sizes: [String]
    style: String
    subcategory: SubCategory
  }

  type Order {
    _id: ID
    purchaseDate: String
    items: [Product]
  }

  type Favorites {
    _id: ID
    items: [Product]
  }

  type Checkout {
    session: ID
  }
  type Auth {
    token: ID!
    user: User
  }

  input ProductInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
  }

  input FavoriteInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
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
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
    favorite(products: [FavoriteInput]): Favorites
  }
  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    addOrder(products: [ID]!): Order
  }
`;

module.exports = typeDefs;

// updateUser(userId: ID!, username: String, email: String, password: String): User
//     editUser(userId: ID!, username: String, email: String, password: String): Auth
//     addCategory(name: String!): Category
//     removeCategory(categoryId: ID!): Category
//     addSubCategory(name: String, category: ID!): SubCategory
//     removeSubCategory(subcategoryId: ID!): SubCategory

// addProduct(name: String!, subcategory: SubCategory!): Product

// editCategory
// editSubCategory
// editProduct


// removeProduct

