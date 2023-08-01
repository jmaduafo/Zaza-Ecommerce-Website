const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  stock: {
    type: Number,
    min: 0,
    default: 0
  },
  sizes: [{ 
    type: String
  }],
  style: {
    type: String
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true
  }
});


const Product = model('Product', productSchema);

module.exports = Product;