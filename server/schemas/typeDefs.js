const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    // Need to do Mutation*******************(Input)
    saveBook(
      bookId: ID!
      authors: [String]
      description: String
      title: String
      image: String
      link: String
    ): User

    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
//Need to do Mutation*******************
