const { AuthenticationError } = require('apollo-server-express');
const { User,  Category, SubCategory, Product } = require('../models');
const { signToken } = require('../utils/auth');
// const bcrypt = require('bcrypt')

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },

        categories: async () => {
            return Category.find();
        },

        category: async (parent, { categoryId }) => {
            return Category.findOne({ _id: categoryId });
        },

        subcategories: async () => {
            return SubCategory.find();
        },

        subcategory: async (parent, { subcategoryId }) => {
            return SubCategory.findOne({ _id: subcategoryId });
        },

    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No profile with this email found!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);
            return { token, user };
        },
        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
        },
        editUser: async (parent, { userId, username, email, password }) => {
            const updateUser = {};

            // Check which fields are provided in the request and add them to the update object
            if (username) {
                updateUser.username = username;
            }
            if (email) {
                updateUser.email = email;
            }
            if (password) {
                updateUser.password = password;
                // const updatedUser = await User.findOneAndUpdate(
                //     { _id: userId },
                //     updateUser,
                //     { password },
                //     // Return the newly updated object instead of the original

                //     { new: true }


                // );
                // const token = signToken(updatedUser);

                // return { token, updatedUser };
                // updateUser.password = hashedPassword;
            }

            const updatedUser = await User.findOneAndUpdate(
                { _id: userId },
                updateUser,
                // Return the newly updated object instead of the original
                { new: true }
            );

            const token = signToken(updatedUser);

            return { token, updatedUser };

            // return updatedUser;
        },
        addCategory: async (parent, { name }) => {
            return await Category.create({ name });
        },
        addSubCategory: async (parent, { name, category }, context) => {
            const newSubCategory = await SubCategory.create({ 
                name, 
                category: category 
            });
        

            await Category.findOneAndUpdate( 
                { _id: category },
                { $addToSet: { subcategories: newSubCategory._id } }
              );

            return newSubCategory;
        },

        removeCategory: async (parent, { categoryId }) => {
            return await Category.findOneAndDelete({ _id: categoryId })
        },
        removeSubCategory: async (parent, { subcategoryId }) => {
            return await SubCategory.findOneAndDelete({ _id: subcategoryId })
        }

    }
}

module.exports = resolvers;
