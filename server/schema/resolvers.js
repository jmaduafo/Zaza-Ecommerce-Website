const { AuthenticationError } = require('apollo-server-express');
const { User,  Category, SubCategory, Product } = require('../models');
const { signToken } = require('../utils/auth');
const { model } = require('mongoose');



const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },

        categories: async () => {
            return await Category.find();
        },

        category: async (parent, { categoryId }) => {
            return await Category.findOne({ _id: categoryId });
        },

        subcategories: async (parent, {category, name}) => {
            const params = {};

            if (category) {
                params.category = category
            }

            if (name) {
                params.name = {
                    $regex: name
                };
            }

            return await SubCategory.find(params).populate('category');
        },

        subcategory: async (parent, { subcategoryId }) => {
            return SubCategory.findOne({ _id: subcategoryId }).populate('category');
        },

        products: async (parent, {subcategory, name}) => {
            const params = {};

            if (subcategory) {
                params.subcategory = subcategory
            }

            if (name) {
                params.name = {
                    $regex: name
                };
            }

            return await Product.find(params)
            .populate('subcategory').populate('category');
        },

        product: async (parent, { productId }) => {
            return Product.findOne({ _id: productId }).populate('subcategory');
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
        // updateUser: async (parent, args, token, context) => {
            
        //     const decoded = jwt.decode( token )

        //     const tokenId = decoded.id
                
        //         const updatedUser =  await User.findByIdAndUpdate(tokenId, args, { new: true });

        //         return  updatedUser ;
            
        //     // throw new AuthenticationError('Not logged in');
        //   },

        // editUser: async (parent, { username, email, password }, { user }) => {
            
        //     if (!user) {
        //         throw new AuthenticationError('Not logged in');
        //       }
            
        //     const updateUser = {};

        //     // Check which fields are provided in the request and add them to the update object
        //     if (username) {
        //         updateUser.username = username;
        //     }
        //     if (email) {
        //         updateUser.email = email;
        //     }
        //     if (password) {
        //         updateUser.password = password;
        //         const updatedUser = await User.findOneAndUpdate(
        //             { _id: userId },
        //             updateUser,
        //             { password },
        //             // Return the newly updated object instead of the original
        //             { new: true, runValidators: true},

        //         );
        //         const token = signToken(updatedUser);

        //         return { token, updatedUser };
        //         updateUser.password = hashedPassword;
        //     }

        //     const updatedUser = await User.findOneAndUpdate(
        //         { _id: userId },
        //         updateUser,
        //         // Return the newly updated object instead of the original
        //         { new: true }
        //     );

        //     const token = signToken(updatedUser);

        //     return { token, updatedUser };

        //     return updatedUser;
        // },
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
                { $addToSet: { subcategories: newSubCategory._id, name } }
              );

            return newSubCategory;
        },

        removeCategory: async (parent, { categoryId }) => {
            return await Category.findOneAndDelete({ _id: categoryId })
        },
        removeSubCategory: async (parent, { subcategoryId }) => {
            const subcategory = await SubCategory.findOneAndDelete({
                _id: subcategoryId
              });
      
              await Category.findOneAndUpdate(
                { _id: subcategoryId.category._id },
                { $pull: { subcategories: subcategory._id } }
              );
      
              return subcategory;
        }

    }
}

module.exports = resolvers;
