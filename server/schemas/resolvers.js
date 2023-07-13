const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      console.log("hello********");
      const user = await User.findOne({ email });
      //console.log(user);

      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      //console.log("tokenresolvers");
      //console.log(token);
      return { token, user };
    },

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      console.log(user);

      const token = signToken(user);
      console.log(token);
      return { token, user };
    },
    saveBook: async (parent, { newBook }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        const addBookUser = await User.findOneAndUpdate(
          { _id: context.user._d },
          { $push: { savedBooks: { newBook } } },
          { $new: true }
        );
        return addBookUser;
      }

      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError("You need to be logged in!");
    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const removeBookUser = await findOneAndUpdate(
          { _id: context.user._d },
          { $pull: { savedBooks: { bookId } } },
          { $new: true }
        );
        return removeBookUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};
module.exports = resolvers;
