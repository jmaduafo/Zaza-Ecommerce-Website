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
  image: [{
    type: String,
    required: true
  }],
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
  cupSizes: [{
    type: String
  }],
  bandSizes: [{
    type: Number
  }],
  style: {
    type: String
  },
  colors: [{
    type: String
  }],
  scents: [{
    type: String
  }],
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true
  }
},
{
  strictPopulate: false
}
);



const Product = model('Product', productSchema);

module.exports = Product;