const { Schema, model } = require('mongoose');

const subcategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Products'
        }
    ]
});


const SubCategory = model('SubCategory', subcategorySchema);

module.exports = SubCategory;
