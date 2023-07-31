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
    type: Int,
    required: true
  },
  price: {
    type: Int,
    required: true,
  }
});


const Product = model('Product', productSchema);

module.exports = Product;