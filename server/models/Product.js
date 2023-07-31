const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  image: {
    type: String,
  },
  stock: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true,
  }
});


const Product = model('Product', productSchema);

module.exports = Product;